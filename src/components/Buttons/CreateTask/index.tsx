import { IoMdAdd } from "react-icons/io";

const CreateTask = () => {
    return(
        <button className="flex flex-row items-center gap-2">
            <IoMdAdd size={18}/>
            <p className="text-lg">Delete existing task</p>
        </button>
    )
}

export default CreateTask;