import { model, models, Schema } from "mongoose";

const carchiRequestsSchema = new Schema(
  {
    car: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    hour: {
      type: String,
      required: true,
    },
    problem: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    isOk: {
      type: String,
      enum: ["Unreviewed", "Approved", "rejected" , "Completed"],
      default: "Unreviewed",
    },
    adminMessage: {
      type: String,
    },
  },
  { timestamps: true }
);

const CarchiRequests =
  models.CarchiRequests || model("CarchiRequests", carchiRequestsSchema);

export default CarchiRequests;
