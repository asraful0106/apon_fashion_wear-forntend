import { Outlet } from "react-router";
import NavBar from "../sharedComponent/NavBar";
import Footer from "../sharedComponent/Footer";

const MainLayout = () => {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <NavBar />
                {/* Main Content */}
                <main className="flex-grow">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </>
    );
};

export default MainLayout;