'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";

const Login = () => {
  const [email, setEmail] = useState('ad3r@gmail.com');
  const [password, setPassword] = useState('contrasfaeña123');
  const [message, setMessage] = useState('');
  const router = useRouter()

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    
    setEmail(e.target.value);
    console.log("hola", email)

  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);

  };

  const handleLogin = async () => {
    try {
      const efec =process.env.NEXT_PUBLIC_API_URL;
    
      const response = await fetch(`${efec}trainer/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
      console.log(data);
  
      if (response.ok) {
        // Success status code, navigate to the desired page
        router.push('/dataTkwd')
      } else {
        // Handle other status codes, e.g., display an error message
        console.error('API request failed with status:', response.status);
        const rp= data.message;
       setMessage(rp)
      }
    } catch (error) {
      console.error('Error during API request:', error);
    }
  };

  return (
    <div>
      <Card placeholder={undefined} className="mr-auto mt-16 ml-auto w-96">
        <CardHeader
         placeholder={undefined}
          variant="gradient"
          color="gray"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography placeholder={undefined} variant="h3" color="white">
          Sign In
          </Typography>
        </CardHeader>
        <CardBody placeholder={undefined} className="flex flex-col gap-4">
          <Input crossOrigin={undefined} label="Email" size="lg" value={email} onChange={handleEmailChange} />
          <Input crossOrigin={undefined} label="Password" size="lg" type="password" value={password} onChange={handlePasswordChange} />
          <a>{message}</a>
          <div className="-ml-2.5">
            <Checkbox crossOrigin={undefined} label="Remember Me" />
          </div>
        </CardBody>
        <CardFooter placeholder={undefined} className="pt-0">
          <Button placeholder={undefined} variant="gradient" fullWidth onClick={handleLogin}>
            Continuar
          </Button>
          <Typography placeholder={undefined} variant="small" className="mt-6 flex justify-center">
            No tienes una cuenta?
            <Typography
            placeholder={undefined}
              as="a"
              href="#signup"
              variant="small"
              color="blue-gray"
              className="ml-1 font-bold"
            >
              Registrate
            </Typography>
          </Typography>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
