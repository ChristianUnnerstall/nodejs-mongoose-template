import mongoose from 'mongoose';

const DataSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: false,
    }
  },
  {
    timestamps: true
  }
);

const Data = mongoose.model("Data", DataSchema);

export { Data };