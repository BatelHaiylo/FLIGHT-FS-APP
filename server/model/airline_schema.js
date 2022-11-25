import mongoose from "mongoose";

const AirlinesSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
    },
    OriginCountry: {
      type: String,
      required: true,
    },
    airplanes: {
      type: Number,
      required: true,
    },
    NumberOfSeats: {
      type: Number,
      required: true,
    },
    availableFlights: {
      type: Number,
      required: true,
    },
  },
  { timeseries: true }
);

export const AirlinesModel = mongoose.model("Airlines", AirlinesSchema);
