import { BsPersonLinesFill } from "react-icons/bs";

const AddEvent = () => {
    return (
        <div className="px-12 w-full  h-screen ">
            <div className="grid grid-cols-12 ">
                <div className="col-span-2 py-4 bg-white">
                    <div className="flex items-center "><BsPersonLinesFill className="me-2" /><h4> Volunteer register list</h4></div>
                    <h5 className="text-primary font-bold	mt-2 ">+ Add Event</h5>
                </div>
                <div className="col-span-10 bg-base-200 h-screen gap-4 p-4">
                    <h3 className="font-bold text-xl py-2 ms-2">Add Event</h3>
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
                                    <input type="file" className="file-input file-input-bordered file-input-primary  w-full max-w-xs" />
                                    <div className="form-control  place-items-end mt-6">
                                        <button className="btn bg-violet-900 text-white">Submit</button>
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