const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ActivitySchema = new Schema(
  {
    activityTitle: {
      type: String,
      required: true
    },
    activityImages: [String],
    activityDescription: {
      type: String,
      default: "",
      required: true
    },
    activityLocation: {
      type: String,
      required: true
    },
    activityCategory: {
      type: String,
      required: true
    },
    timeStart: {
      type: String,
      required: true
    },
    timeEnd: {
      type: String,
      required: true
    },
    usersInterested: {
      type: String
    },
    activityCapacity: {
      type: Number,
      required: true
    }
  },
  { timestamps: true }
);

module.exports = Activtiy = mongoose.model("activity", ActivitySchema);
