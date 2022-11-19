import mongoose from "mongoose";

const FlightsSchema = new mongoose.Schema({
  flightNumber: {
    type: String,
    required: true,
  },
  takeOff: {
    type: String,
    required: true,
  },
  landing: {
    type: String,
    required: true,
  },
  NumberOfSeats: {
    type: Number,
    required: true,
  },
  departureTime: {
    type: Date,
    required: true,
  },
  landingTime: {
    type: Date,
    required: true,
  },
  IsThereFirstClass: {
    type: Boolean,
    required: true,
  },
});
module.exports = mongoose.model("Flight", FlightsSchema);
