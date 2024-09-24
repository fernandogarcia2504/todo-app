import React from "react";
import LoginCard from "@/components/Cards/LoginCard";
import Image from 'next/image';

const Login = () => {
  return (
    <div className="h-full flex w-screen">
      <div className="w-1/2 relative pt-8 pl-12">
        <img src="/login.jpg" className="rounded-md shadow-md" alt="hola" />
      </div>
      
      <div className="w-1/2 pt-12 flex items-center justify-center">
        <LoginCard />
      </div>
    </div>
  );
}

export default Login;
