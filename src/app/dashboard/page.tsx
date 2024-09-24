import CreateTask from "@/components/Buttons/CreateTask";
import DeleteTask from "@/components/Buttons/DeleteTask";
import SignOut from "@/components/Buttons/SignOut/indext";
import Calendar from "@/components/Calendar";
import TaskCard from "@/components/Cards/TaskCard";

const Dashboard = () => {
    return (
        <div>
            <Calendar />
            <CreateTask />
            <DeleteTask />
            <SignOut />
            <TaskCard 
                title="Computer Science Homework" 
                from="Monday" 
                to="Friday" 
                hour="20:00" 
                description="Programming homework" 
                color="Red" 
            />
        </div>
    )
}

export default Dashboard;