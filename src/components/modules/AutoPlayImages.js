"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import honda from "../../../public/cars/honda.png";
import honda2 from "../../../public/cars/honda2.avif";
import car1 from "../../../public/cars/car1.webp";
import car2 from "../../../public/cars/car2.avif";
import car3 from "../../../public/cars/car3.avif";
import car4 from "../../../public/cars/car4.avif";
import car5 from "../../../public/cars/car5.jpg";
import car6 from "../../../public/cars/car6.webp";
import car7 from "../../../public/cars/car7.jpg";
import car8 from "../../../public/cars/car8.jpeg";
import car9 from "../../../public/cars/car9.avif";

function AutoPlayImages() {
  const cars = [
    honda,
    honda2,
    car1,
    car2,
    car3,
    car4,
    car5,
    car6,
    car7,
    car8,
    car9,
  ];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); 
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % cars.length);
        setFade(true);
      }, 500);
    }, 4000);
    return () => clearInterval(interval);
  }, [cars.length]);

  return (
    <div>
      <div
        className={`transition-opacity duration-700 ease-in-out  ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        <Image
          src={cars[index]}
          alt="car"
          width={700}
          height={400}
          className=" m-6 rounded-lg w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] mx-auto h-[400px] object-cover shadow-2xl"
        />
      </div>
    </div>
  );
}

export default AutoPlayImages;
