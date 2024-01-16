'use client'
import React from "react";
import Image from "next/image";
import { Navbar2 } from "@/components/navbar2";

import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

import { useState, useEffect } from 'react'
  interface DatosUsuario {
    codigo: string;
    DAN: string;
    cedula: string;
    clase: string;
    createdAt: string;
    email: string;
    estadoSolicitud: string;
    fechaActualizacion: string;
    fechaExpedicion: string;
    licencia: string;
    nombre: string;
    password: string;
    role: string;
    solicita: string;
    updatedAt: string;
    vigencia: string;
  }
  function About() {
    const [data, setData] = useState<Array<DatosUsuario> | null>(null);
    const [isLoading, setLoading] = useState(true)
    const [message, setMessage] = useState('');
    const handleUsuario = async () => {
      try {
        const efec =process.env.NEXT_PUBLIC_API_URL;
        const userData = {
          codigo: "123",
          DAN: "456",
          cedula: "789",
          // ... otras propiedades ...
          email: "usuario@example.com",
          password: "contraseñaSegura",
          // ... otras propiedades ...
        };
        
        try {
          const response = await fetch(`${efec}trainer/`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
          });
        
          const data = await response.json();
          console.log(data);
        
          if (response.ok) {
            // Success status code, navigate to the desired page
            // Por ejemplo, podrías redirigir al usuario a una página de éxito
            // usando react-router o el enrutamiento de tu elección.
          } else {
            // Handle other status codes, e.g., display an error message
            console.error('API request failed with status:', response.status);
            const errorMessage = data.message;
            // Aquí puedes manejar el mensaje de error como desees, por ejemplo,
            // almacenarlo en un estado o mostrarlo al usuario.
            setMessage(errorMessage);
          }
        } catch (error) {
          console.error('Error during API request:', error);
        }
        
    };

  
    return (
      <>
      <div className=" mr-60" >
        <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Sign Up
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Nice to meet you! Enter your details to register.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Name
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Email
          </Typography>
          <Input
             
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Password
          </Typography>
          <Input
            type="password"
            size="lg"
            placeholder="********"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        <Checkbox
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              I agree the
              <a
                href="#"
                className="font-medium transition-colors hover:text-gray-900"
              >
                &nbsp;Terms and Conditions
              </a>
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
        />
        <Button className="mt-6" fullWidth onClick={handel}>
          sign up
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <a href="#" className="font-medium text-gray-900">
            Sign In
          </a>
        </Typography>
      </form>
    </Card>
    </div>
    </>
    );
  }

  export default About;