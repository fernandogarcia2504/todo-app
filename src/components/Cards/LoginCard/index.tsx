import React from "react";

const LoginCard = () => {
    return(
        <div className="bg-white w-1/4  ">
            <h1>Login in <span className="text-orange-600">DoMore</span></h1>
            <p className="text-[#6a6464]">Your journey if being more organized starts now! We are glad to have you back.</p>
            <form action="">
                <div className="flex flex-col">
                    <label htmlFor="">Email</label>
                    <input type="email" className="border border-gray-300 rounded-sm shadow-md" placeholder="Enter your email..." />
                    <label htmlFor="">Password</label>
                    <input type="email" className="border border-gray-300 rounded-sm shadow-md" placeholder="Enter your password..." />
                    <div>
                        <button className="bg-orange-600">Login</button>
                        <p>Do not have an account yet? <span className="text-orange-600 rounded-sm shadow-md">Register</span></p>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default LoginCard;