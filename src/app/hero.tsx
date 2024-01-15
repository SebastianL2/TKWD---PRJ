"use client";

import { IconButton, Typography } from "@material-tailwind/react";
import { Carousel } from "@material-tailwind/react";

function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-[url('/image/image-5.jpg')] bg-cover bg-no-repeat">
    <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
    <div className="grid min-h-screen px-8">
      <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
        <div className="absolute max-w-[160vh] mx-auto  h-[70vh]">
          <Carousel placeholder={undefined} className="rounded-xl h-full">
            <img
              src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
              alt="image 1"
              className="h-full w-full object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
              alt="image 2"
              className="h-full w-full object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
              alt="image 3"
              className="h-full w-full object-cover"
            />
          </Carousel>
    </div>
        <Typography
         placeholder={undefined}
          variant="lead"
          color="white"
          className=" mt-24 mb-12 w-full md:max-w-full lg:max-w-3xl"
        >
          Introduction: Join us in a a journey into the world of life!
        </Typography>
        <Typography
         placeholder={undefined}
          variant="paragraph"
          color="white"
          className="mt-1 mb-7 font-medium uppercase"
        >
          Connect with us on:
        </Typography>
        <div className="gap-8 flex">
          <IconButton placeholder={undefined} variant="text" color="white" size="sm">
            <i className="fa-brands fa-twitter text-base" />
          </IconButton>
          <IconButton placeholder={undefined} variant="text" color="white" size="sm">
            <i className="fa-brands fa-facebook text-base" />
          </IconButton>
          <IconButton placeholder={undefined} variant="text" color="white" size="sm">
            <i className="fa-brands fa-instagram text-base" />
          </IconButton>
        </div>
      </div>
    </div>
  </div>
  );
}
export default Hero;
