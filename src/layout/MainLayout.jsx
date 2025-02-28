import { Outlet } from "react-router";
import NavBar from "../sharedComponent/NavBar";
import Footer from "../sharedComponent/Footer";
import CategoryContextProvider from "../context/categoryContext/CategoryContextProvider";
import BannerContextProvider from "../context/BannerContext/BannerContextProvider";

const MainLayout = () => {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                {/* Category contex provider to load the categories from the API */}
                <CategoryContextProvider>
                    {/* Banner context provider to load the banner from the API */}
                    <BannerContextProvider>
                        <NavBar />
                        {/* Main Content */}
                        <main className="flex-grow">
                            <Outlet />
                        </main>
                        <Footer />
                    </BannerContextProvider>
                </CategoryContextProvider>
            </div>
        </>
    );
};

export default MainLayout;