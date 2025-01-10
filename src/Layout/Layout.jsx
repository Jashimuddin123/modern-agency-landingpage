import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navigatios/Navbar";

const Layout = () => {
    return (
        <div className="">
            <Navbar />
    
            <Outlet />
        </div>
    );
};

export default Layout;
