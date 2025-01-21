import { Outlet } from "react-router";
import NavBar from "../sharedComponent/NavBar";

const MainLayout = () => {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    );
};

export default MainLayout;