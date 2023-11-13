import { Outlet } from "react-router-dom"
import Navbar from "../pages/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import Loader from "../pages/Loader/Loader";
const Main = () => {
    const { loading } = useContext(AuthContext);
    if (loading) {
        return <Loader></Loader>
    }
    return (
        <div className="">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;