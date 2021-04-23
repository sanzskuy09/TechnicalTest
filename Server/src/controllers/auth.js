const {} = require("../../models");
const joi = require("joi");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Register Admin
exports.RegisterAdmin = async (req, res) => {
  try {
    const { email, password, name } = req.body;

    const schema = joi.object({
      email: joi.string().email().min(10).required(),
      password: joi.string().min(8).required(),
      name: joi.string().min(3).max(50).required(),
    });

    const { error } = schema.validate(req.body);

    if (error)
      return res.status(400).send({
        status: "Validation failed",
        message: error.details[0].message,
      });

    const checkEmail = await user.findOne({
      where: {
        email,
      },
    });

    if (checkEmail)
      return res.status(400).send({
        status: "Register Failed",
        message: "Email already registered",
      });

    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = await user.create({
      ...req.body,
      password: hashedPassword,
    });

    const secretKey = "ur19ghf8b56lc";
    const token = jwt.sign(
      {
        id: admin.id,
      },
      secretKey
    );

    res.send({
      status: "Success",
      message: "Success Register",
      data: {
        user: {
          id: admin.id,
          email: admin.email,
          name: admin.name,
          token,
        },
      },
    });
  } catch (error) {
    res.status(500).send({
      status: "Error",
      message: "Server Error",
    });
  }
};

// Login Admin
exports.loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const schema = joi.object({
      email: joi.string().email().min(10).required(),
      password: joi.string().min(8).required(),
    });

    const { error } = schema.validate(req.body);

    if (error)
      return res.status(400).send({
        status: "Validation failed",
        message: error.details[0].message,
      });

    const checkEmail = await user.findOne({
      where: {
        email,
      },
    });

    if (!checkEmail)
      return res.status(401).send({
        status: "Login failed",
        message: "Yout Credentials is not valid",
      });

    const validPassword = await bcrypt.compare(password, checkEmail.password);

    if (!validPassword)
      return res.status(401).send({
        status: "Login failed",
        message: "Yout Credentials is not valid",
      });

    const secretKey = "ur19ghf8b56lc";
    const token = jwt.sign(
      {
        id: checkEmail.id,
      },
      secretKey
    );

    res.send({
      status: "Success",
      message: "Login Success",
      data: {
        user: {
          id: checkEmail.id,
          name: checkEmail.name,
          email: checkEmail.email,
          token,
        },
      },
    });
  } catch (error) {
    res.status(500).send({
      status: "Error",
      message: "Server Error",
    });
  }
};

// Check Auth
exports.checkAuth = async (req, res) => {
  try {
    const userData = await user.findOne({
      where: {
        id: req.userId.id,
      },
    });

    res.send({
      status: "success",
      message: "User Valid",
      data: {
        userData,
      },
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: "Error",
    });
  }
};
