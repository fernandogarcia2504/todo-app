import { IoMdRemove } from "react-icons/io";

const DeleteTask = () => {
    return(
        <button className="flex flex-row items-center gap-2">
            <IoMdRemove size={18} />
            <p className="text-lg">Delete existing task</p>
        </button>
    )
}

export default DeleteTask;