const joi = require("joi");
const { event } = require("../../models");

// Get Data Event
exports.getEvent = async (req, res) => {
  try {
    const events = await event.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    res.send({
      status: "Success",
      message: "Success Get Data Event",
      data: {
        events,
      },
    });
  } catch (error) {
    res.send({
      status: "Error",
      message: "Server Error",
    });
  }
};

// Add Event
exports.AddEvent = async (req, res) => {
  try {
    const { body } = req;

    const schema = joi.object({
      title: joi.string().min(5).max(20).required(),
      location: joi.string().min(4).required(),
      participant: joi.string().required(),
      date: joi.string().required(),
      note: joi.string().min(50).required(),
    });

    const { error } = schema.validate(req.body);

    if (error)
      return res.status(400).send({
        status: "Validation Failed",
        message: error.details[0].message,
      });

    const urlImg = "http://localhost:5000/uploads/";

    const { id: eventId } = await event.create({
      ...body,
      image: urlImg + req.files.image[0].filename,
    });

    const events = await event.findOne({
      where: {
        id: eventId,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    res.send({
      status: "Success",
      message: "Add Event Success",
      data: { events },
    });
  } catch (error) {
    res.send({
      status: "Error",
      message: "Server Error",
    });
  }
};
