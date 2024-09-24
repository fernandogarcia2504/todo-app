import { ITaskCard } from "./types";

const TaskCard = (props: ITaskCard) => {


    return(
        <div className="w-[15%] bg-[#f5f5f5] flex flex-col py-2 px-2 rounded-md shadow-sm">
            <p className="font-bold text-[15px]">{props.title}</p>
            <div className="pt-4">
                <p><span className="font-bold text-[15px]">From:</span> {props.from}</p>
                <p><span className="font-bold text-[15px]">To:</span> {props.to}</p>
                <p><span className="font-bold text-[15px]">Hour:</span> {props.hour}</p>
                <p><span className="font-bold text-[15px]">Description:</span> {props.description}</p>
            </div>
            <div className="pt-4">
                <p><span className="font-bold">Color:</span> {props.color}</p>
            </div>
        </div>
    )
}

export default TaskCard;