import { useEffect, useState } from "react";
import VolunteersList from "./VolunteersList";

const VolunteersTable = () => {
    const [volunteerList, setVolunteerList] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/volunteersList")
            .then(res => res.json())
            .then(data => setVolunteerList(data))
    }, [volunteerList])
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Title</th>
                            <th>Registration Date</th>
                            <th>
                                Description
                            </th>
                            <th>Action</th>
                            <th>

                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            volunteerList.map(event => <VolunteersList
                                key={event._id} event={event}
                            ></VolunteersList>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default VolunteersTable;