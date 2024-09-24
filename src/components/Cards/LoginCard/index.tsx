"use client"
import React from "react";

import { useRouter } from "next/navigation";


const LoginCard = () => {

    const router = useRouter();

    const onSubmit = (e: React.FormEvent)=> {
        e.preventDefault();
        router.push('/dashboard')
    }

    return(
        <div className="bg-white w-1/2  ">
            <h1 className="text-3xl">Login in <span className="text-orange-600">DoMore</span></h1>
            <p className="text-sm text-[#6a6464] pt-2">Your journey if being more organized starts now! We are glad to have you back.</p>
            <form onSubmit={onSubmit}>
                <div className="flex flex-col ">
                    <label htmlFor="" className="text-base pt-4">Email</label>
                    <input type="email" className="py-2 bg-[#F9F3F3] rounded-sm shadow-md" placeholder="Enter your email..." />
                    <label htmlFor="" className="text-base pt-12">Password</label>
                    <input type="password" className="py-2 bg-[#F9F3F3] rounded-sm shadow-md" placeholder="Enter your password..." />
                    <div className="flex flex-col items-center pt-12">
                        <button className="bg-orange-600 py-2 rounded-sm shadow-md w-full text-white font-bold" type="submit">Login</button>
                        <p className="pt-3">Do not have an account yet? <span className="text-orange-600 ">Register</span></p>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default LoginCard;