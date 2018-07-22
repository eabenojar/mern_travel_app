const express = require("express");
const router = express.Router();

// Activity Models
const Activity = require("../models/Activity");

// @route   GET api/items
// @desc    Get All Items
// @access  Public

router.get("/", (req, res) => {
  Activity.find()
    .sort({ createdAt: -1 })
    .then(activity => res.send(activity));
});

// @route   POST api/items
// @desc    Create an activity
// @access  Public

router.post("/create", (req, res) => {
  const newActivity = new Activity({
    activityTitle: req.body.activityTitle,
    activityDescription: req.body.activityDescription,
    activityLocation: req.body.activityLocation,
    activityCategory: req.body.activityCategory,
    timeStart: req.body.timeStart,
    timeEnd: req.body.timeEnd,
    activityCapacity: req.body.activityCapacity
  });

  newActivity
    .save()
    .then(activity => res.json(activity))
    .catch(err => console.log(err));
});

// @route   PUT api/items
// @desc    Delte an activity
// @access  Public

router.put("/update/:id", (req, res) => {
  Activity.findByIdAndUpdate(
    req.params.id,
    {
      activityTitle: req.body.activityTitle,
      activityDescription: req.body.activityDescription,
      activityLocation: req.body.activityLocation,
      activityCategory: req.body.activityCategory,
      timeStart: req.body.timeStart,
      timeEnd: req.body.timeEnd,
      activityCapacity: req.body.activityCapacity
    },
    { new: true }
  )
    .then(activity => res.json(activity))
    .catch(err => res.json("ID NOT FOUND"));
});

// @route   DELETE api/items
// @desc    Delte an activity
// @access  Public

router.delete("/delete/:id", (req, res) => {
  Activity.findByIdAndRemove(req.params.id)
    .then(activity => res.json(activity))
    .then(() => res.json({ success: true }))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
