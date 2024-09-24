import { ArrowRight } from "lucide-react";


const SignOut = () => {
    return(
        <button className="bg-black text-white flex flex-row items-center rounded-sm shadow-md px-3  gap-2">
            <p className="text-lg">Sign Out</p> 
            <ArrowRight size={18}/>
        </button>
    )
}

export default SignOut;