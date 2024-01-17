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
  codigo: string,
  DAN: string,
  cedula: string,
  email: string,
  password: string,
 
  // ... otras propiedades ...
}
  function About() {
    const [data, setData] = useState<Array<DatosUsuario> | null>(null);
    const [isLoading, setLoading] = useState(true)
    const [message, setMessage] = useState('');
    const handleUsuario = async () => {
      try {
        const efec = process.env.NEXT_PUBLIC_API_URL;
  
        const userData: DatosUsuario = {
          codigo: "123",
          DAN: "456",
          cedula: "789",
          // ... otras propiedades ...
          email: "usuario@example.com",
          password: "contraseñaSegura",
          // ... otras propiedades ...
        };
  
        const response = await fetch(`${efec}trainer/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        });
  
        const responseData = await response.json();
        console.log(responseData);
  
        if (response.ok) {
          // Éxito: el código de estado es 2xx
          // Por ejemplo, podrías redirigir al usuario a una página de éxito
          // usando react-router o el enrutamiento de tu elección.
        } else {
          // Manejar otros códigos de estado, por ejemplo, mostrar un mensaje de error
          console.error('API request failed with status:', response.status);
          const errorMessage = responseData.message || 'Error desconocido';
          setMessage(errorMessage);
        }
      } catch (error) {
        console.error('Error during API request:', error);
      }
    };

  
    return (
      <>
      <div className=" mt-20" >
        <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Sign Up
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Nice to meet you! Enter your details to register.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray"  className="-mb-3">
            Your Name
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            onChange={DatosUsuario.}
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
        <Button className="mt-6" fullWidth onClick={handleUsuario}>
          sign up
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <a href="#" className="font-medium text-gray-900">
            Sign In
          </a>s
        </Typography>
      </form>s
    </Card>
    </div>
    </>
    );
  }
  

  export default About;