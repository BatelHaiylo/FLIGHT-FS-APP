import mongoose from "mongoose";

const FlightsSchema = new mongoose.Schema(
  {
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
      type: String,
      required: true,
    },
    landingTime: {
      type: String,
      required: true,
    },
    IsThereFirstClass: {
      type: Boolean,
      required: true,
    },
  },
  { timeseries: true }
);
const flightsModel = mongoose.model("Flight", FlightsSchema);
export const FlightsModel = flightsModel;
