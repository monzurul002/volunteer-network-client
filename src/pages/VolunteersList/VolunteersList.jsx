import { MdDeleteOutline } from "react-icons/md";

const VolunteersList = ({ event }) => {
    const { _id, title, description, date, imageUrl } = event;

    const handleDelete = (id) => {
        console.log(id);
        fetch(`http://localhost:5000/events/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {

                }
            })
    }
    return (
        <tr>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={imageUrl} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>

                </div>
            </td>
            <td>
                {title}
            </td>
            <td> <div>
                <div className="font-bold">{date}</div>
                <div className="text-sm opacity-50">United States</div>
            </div></td>
            <td>{description.slice(0, 15)}</td>
            <td onClick={() => handleDelete(_id)} className="text-2xl text-red-500"><MdDeleteOutline />
            </td>
        </tr>




    );
};

export default VolunteersList;