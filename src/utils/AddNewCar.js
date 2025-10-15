"use server";

import CarchiUser from "@/models/carchiUser";
import connectDB from "./connectDB";

export default async function AddNewCar(
  userId,
  carBrand,
  carModel,
  cantFindCar,
  carYear
) {
  try {
    await connectDB();
  } catch (error) {
    throw error
  }
  const AddCar = await CarchiUser.findById(userId);
  AddCar.cars.push({ carBrand, carModel, cantFindCar, carYear });
  await AddCar.save();
  return JSON.parse(JSON.stringify(AddCar));
}
