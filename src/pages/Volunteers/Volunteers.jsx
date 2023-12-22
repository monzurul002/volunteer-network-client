import { useEffect, useState } from "react";
import VolunteersCard from "../VolunteersCard/VolunteersCard";

const Volunteers = () => {

    const [volunteers, setVolunteers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/volunteers')
            .then(res => res.json())
            .then(data => setVolunteers(data))
    }, [])

    return (
        <div className="text-center">
            <div className="py-5">
                <h1 className="text-xl md:text-2xl px-3 font-bold text-purple-600">I GROW BY HELPING PEOPLE IN NEED</h1>

                <div className="form-control">
                    <label className="input-group flex justify-center my-2">
                        <input type="text" placeholder="Search Volunteer" className="input input-bordered w-1/2" />
                        <span>Search</span>
                    </label>
                </div>
                <div className="grid justify-center grid-cols-1 md:grid-cols-4 gap-2 md:gap-5 ">
                    {
                        volunteers.map(volunteer => <VolunteersCard
                            key={volunteer._id} volunteer={volunteer}
                        ></VolunteersCard>)
                    }
                </div>

            </div>
        </div>

    );
};

export default Volunteers;