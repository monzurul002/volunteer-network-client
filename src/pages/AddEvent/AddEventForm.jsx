
const AddEventForm = ({ handleAddEvent }) => {
    return (
        <div>
            <h3 className="font-bold text-xl py-2 ms-2">Add Event</h3>
            <div className="bg-white rounded-xl">
                <form onSubmit={handleAddEvent} className="card-body">
                    <div className="grid grid-cols-2">
                        <div className="form-control mx-4">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input type="text" name="title" placeholder="text" className="input input-bordered" required />
                        </div>
                        <div className="form-control mx-4">
                            <label className="label">
                                <span className="label-text">Event Date</span>
                            </label>
                            <input type="date" name="date" placeholder="event date" className="input input-bordered" required />

                        </div>
                        <div className="form-control mx-4">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea name="description" className="textarea textarea-bordered h-24" placeholder="Write description"></textarea>
                        </div>

                        <div className="form-control mx-4 my-2">
                            <label className="label">
                                <span className="label-text">Banner</span>
                            </label>
                            <input type="file" accept="image/*" name="photo" className="file-input file-input-bordered file-input-primary  w-full max-w-xs" />
                            <div className="form-control  place-items-end mt-6">
                                <button className="btn bg-violet-900 text-white">Submit</button>
                            </div>
                        </div>

                    </div>

                </form>

            </div>
        </div>
    );
};

export default AddEventForm;