"use client";

import { IconButton, Typography } from "@material-tailwind/react";
import { Carousel } from "@material-tailwind/react";
import Link from "next/link";

function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-[url('/image/image-5.jpg')] bg-cover bg-no-repeat">
    <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
    <div className="grid min-h-screen px-8">
      <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
        <div className="absolute max-w-[160vh] mx-auto  h-[70vh]">
          <Carousel placeholder={undefined} className="rounded-xl h-full">
            <img
              src="https://scontent-bog1-1.xx.fbcdn.net/v/t1.6435-9/62106050_2559222900971747_3712914784039993344_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=zjT2cjTbmRkAX_yrkXV&_nc_ht=scontent-bog1-1.xx&oh=00_AfA5oJ0iDVCRmZHwGbLDnpe6Dds7Q7oADAmHytezFAOsIg&oe=65CE8E30"
              alt="image 1"
              className="h-full w-full object-cover"
            />
            <img
              src="https://scontent-bog1-1.xx.fbcdn.net/v/t1.6435-9/41552599_2382501661977206_6423654006744154112_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=Y9xzxHL-os8AX958stZ&_nc_ht=scontent-bog1-1.xx&oh=00_AfBBBIt9RPBpChcklsrTXxOtE7KVuz64Xg1GXQfhZX3ngg&oe=65CEB2D2"
              alt="image 2"
              className="h-full w-full object-cover"
            />
            <img
              src="https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/412852032_734678845356982_2436685674141792805_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=783fdb&_nc_eui2=AeH1IIFrBMR-Gx6M6nriDaxB8TNGkuQutyzxM0aS5C63LC8Q8er4IH8feAiHwpY3QwWEPtpceYbq4c8f1OttvkU2&_nc_ohc=-in2z0ZJ3RIAX8A5n52&_nc_ht=scontent-bog1-1.xx&oh=00_AfBvkOcu728h7jAizKywPs18ASFFRlikJ9Pls5gk8HkRjw&oe=65ACCF94"
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
            <Link href={"https://www.facebook.com/FederacionColombianaDeTkd"}>
            <i className="fa-brands fa-twitter text-base" />
            </Link>
          </IconButton>
          <IconButton placeholder={undefined} variant="text" color="white" size="sm">
          <Link href={"https://www.facebook.com/pages/Ciartkd/874863186013977"}>
            <i className="fa-brands fa-facebook text-base" />
            </Link>
          </IconButton>
          <IconButton placeholder={undefined} variant="text" color="white" size="sm">
          <Link href={"https://www.instagram.com/ciart_tkdcol/?hl=es"}>
            <i className="fa-brands fa-instagram text-base" />
            </Link>
          </IconButton>
        </div>
      </div>
    </div>
  </div>
  );
}
export default Hero;
