import { BsPersonLinesFill } from "react-icons/bs";
import AddEventForm from "./AddEventForm";
import { useState } from "react";
import VolunteersTable from "../VolunteersList/VolunteersTable";

const AddEvent = () => {
    const [tableShow, setTableShow] = useState(false)

    const handleAddEvent = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const photo = form.photo.files[0];

        const date = form.date.value;
        const description = form.description.value;
        // const eventInfo = {
        //     title,
        //     date,
        //     description
        // }
        const formData = new FormData()

        formData.append("image", photo)
        formData.append('title', title)
        formData.append('date', date)
        formData.append('description', description)
        fetch("http://localhost:5000/profile", {
            method: "POST",

            body: formData

        }).then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
    return (
        <div className="px-12 w-full  h-screen ">
            <div className="grid grid-cols-12 ">
                <div className="col-span-2 py-4 bg-white">
                    <div onClick={() => setTableShow(true)} className="flex items-center font-bold text-purple-700 hover:cursor-pointer"><BsPersonLinesFill className="me-2" /><h4 > Volunteer register list</h4></div>
                    <h5 onClick={() => setTableShow(!tableShow)} className="text-primary font-bold hover:cursor-pointer	mt-2 ">+ Add Event</h5>
                </div>
                <div className="col-span-10 bg-base-200 h-screen gap-4 p-4">
                    {
                        !tableShow ? <AddEventForm handleAddEvent={handleAddEvent}></AddEventForm> : <VolunteersTable></VolunteersTable>
                    }
                </div>

            </div>
        </div>

    );
};

export default AddEvent;