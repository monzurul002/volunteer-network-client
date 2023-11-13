import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { useNavigate } from "react-router-dom";

import Swal from "sweetalert2";


const Register = () => {
    const [error, setError] = useState("")
    const { createUser, profileUpdate, } = useContext(AuthContext);
    const navigate = useNavigate();


    const handleRegister = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const date = form.date.value;
        createUser(email, password)
            .then(result => {
                const user = result.user;
                if (user) {
                    profileUpdate(name)
                        .then(result => {

                        })
                    Swal.fire({
                        title: "Good job!",
                        text: "Registration complete",
                        icon: "success"
                    });
                    navigate("/")
                }
            }).catch(error => {
                setError(error.message)
            })



        form.reset()
    }
    return (
        <div className=" w-full    bg-base-200">

            <div className="hero-content w-full ">

                <div className="  shadow-2xl bg-base-100">
                    <h1 className="text-5xl text-center text-purple-700 font-bold">Register!</h1>
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="grid grid-cols-2">
                            <div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text  ">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Write name " className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                </div>
                            </div>
                            <div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Join Date</span>
                                    </label>
                                    <input type="date" name="date" placeholder="Date" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                                </div>
                            </div>
                            <p className="text-red-500">{error}</p>
                            <div className="form-control mt-6">
                                <button className="btn  btn-primary">Register</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Register;