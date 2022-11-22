import mongoose from "mongoose";

const StatesSchema = new mongoose.Schema({
  countryName: {
    type: String,
    required: true,
  },
  cities: {
    type: [String],
    required: true,
  },
  info: {
    type: {String},
    required: true,
  },
});

export const States_Schema = mongoose.model("States", StatesSchema);