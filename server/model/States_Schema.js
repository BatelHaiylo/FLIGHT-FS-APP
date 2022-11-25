import mongoose from "mongoose";

const StatesSchema = new mongoose.Schema(
  {
    countryName: {
      type: String,
      required: true,
    },
    cities: {
      type: [String],
      required: true,
    },
    info: {
      type: { String },
      required: true,
    },
  },
  { timeseries: true }
);

export const StatesModal = mongoose.model("States", StatesSchema);
