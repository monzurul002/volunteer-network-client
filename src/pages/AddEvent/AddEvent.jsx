
const AddEvent = () => {
    return (
        <div className="px-12 ">
            <div className="grid grid-cols-12 ">
                <div className="col-span-2 py-4 bg-red-200">
                    <h4>Volunteer register list</h4>
                    <h5 className="text-primary">+ Add Event</h5>
                </div>
                <div className="col-span-10 bg-base-200  gap-4 p-4">
                    <h3>Add Event</h3>
                    <div className="bg-white rounded-xl">
                        <form className="card-body">
                            <div className="grid grid-cols-2">
                                <div className="form-control mx-4">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control mx-4">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" className="input input-bordered" required />

                                </div>
                                <div className="form-control mx-4">
                                    <label className="label">
                                        <span className="label-text">Description</span>
                                    </label>
                                    <textarea className="textarea textarea-bordered h-24" placeholder="Write description"></textarea>
                                </div>

                                <div className="form-control mx-4 my-2">
                                    <label className="label">
                                        <span className="label-text">Banner</span>
                                    </label>
                                    <input type="file" className="file-input file-input-bordered file-input-primary w-full max-w-xs" />
                                    <div className="form-control  place-items-end mt-6">
                                        <button className="btn btn-primary">Submit</button>
                                    </div>
                                </div>

                            </div>

                        </form>

                    </div>
                </div>

            </div>
        </div>

    );
};

export default AddEvent;