import { Link } from "react-router-dom";
import logo from "../../assets/logos/logo.png"
const Navbar = () => {
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
                <Link to='/login' className="btn btn-primary">Login</Link>
                <Link to="/register" className="btn btn-primary">Register</Link >
                <Link to="/admin" className="btn ms-3 btn-secondary">Admin Login</Link>
            </div>
        </div>
    );
};

export default Navbar;