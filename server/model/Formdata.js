const mongoose = require("mongoose");
const Formdata = new mongoose.Schema({
  fname: {
    type: String,
    required: [true, "first name should be provided"],
  },
  lname: {
    type: String,
    required: [true, "last name should be provided"],
  },
  email: {
    type: String,
    required: [true, "email should be provided"],
    unique: [true, "email should be unique , already registered"],
  },
  phone: {
    type: String,
    required: [true, "phone number should be provided"],
  },
  linkedin: {
    type: String,
  },
  github: {
    type: String,
  },
  skills: {
    type: String,
  },
  exp1_org: {
    type: String,
  },
  exp1_pos: {
    type: String,
  },
  exp1_desc: {
    type: String,
  },
  exp1_dur: {
    type: String,
  },
  proj1_title: {
    type: String,
  },
  proj1_link: {
    type: String,
  },
  proj1_desc: {
    type: String,
  },
  proj2_title: {
    type: String,
  },
  proj2_link: {
    type: String,
  },
  proj2_desc: {
    type: String,
  },
  edu1_school: {
    type: String,
  },
  edu1_year: {
    type: String,
  },
  edu1_qualification: {
    type: String,
  },
  edu1_desc: {
    type: String,
  },
  extra_1: {
    type: String,
  },
  extra_2: {
    type: String,
  },
});

module.exports = mongoose.model("formdata", Formdata);
