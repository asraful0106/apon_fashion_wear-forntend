import { Outlet } from "react-router";
import NavBar from "../sharedComponent/NavBar";
import Footer from "../sharedComponent/Footer";
import CategoryContextProvider from "../context/categoryContext/CategoryContextProvider";

const MainLayout = () => {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <CategoryContextProvider>
                    <NavBar />
                    {/* Main Content */}
                    <main className="flex-grow">
                        <Outlet />
                    </main>
                    <Footer />
                </CategoryContextProvider>
            </div>
        </>
    );
};

export default MainLayout;