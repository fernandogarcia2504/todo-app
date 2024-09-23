import React from "react";
import LoginCard from "@/components/Cards/LoginCard";
import Image from 'next/image';

const Login = () => {
  return (
    <div className="h-screen flex w-full">
      <div className="w-1/2 relative">
        <Image 
          src="/login.jpg" 
          quality={100} 
          alt="Login Image" 
          fill 
          className="rounded-md"
        />
      </div>
      
      <div className="w-1/2 flex items-center justify-center">
        <LoginCard />
      </div>
    </div>
  );
}

export default Login;
