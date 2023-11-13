import { Link } from "react-router-dom";
import logo from "../../assets/logos/logo.png"
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
const Navbar = () => {
    const { user } = useContext(AuthContext)

    return (
        <div className="navbar bg-teal-400 text-white ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li ><Link to='/'>Home</Link></li>
                        <li><Link to='/donation'>Donation</Link></li>
                        <li><Link to='/events'>Events</Link></li>
                        <li><Link to='/Blogs'>Blogs</Link></li>


                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl"><img src={logo} className="w-56 h-12" alt="" /></a>
            </div>
            <div className="navbar-center hidden  lg:flex">
                <ul className="menu text-xl menu-horizontal px-1">
                    <li ><Link to='/'>Home</Link></li>
                    <li><Link to='/donation'>Donation</Link></li>
                    <li><Link to='/events'>Events</Link></li>
                    <li><Link to='/Blogs'>Blogs</Link></li>
                </ul>
            </div>
            <div className="navbar-end flex flex-column">
                {
                    !user ? <><Link to='/login' className="text-white mx-3 font-bold">Login</Link>
                        <Link to="/register" className="text-white font-bold">Register</Link ></> : <><h3>{user?.displayName}</h3>  <button className="btn bg-red-600 text-white mx-1 hover:bg-indigo-600">Logout</button></>
                }

            </div>
        </div>
    );
};

export default Navbar;