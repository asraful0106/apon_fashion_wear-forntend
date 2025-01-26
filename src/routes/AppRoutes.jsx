import { BrowserRouter, Route, Routes } from 'react-router';
import MainLayout from '../layout/MainLayout';
import HomePage from '../pages/HomePage/HomePage';
import LoginPage from '../pages/LoginPage/LoginPage';
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage'

const AppRoutes = () => {
    return (
        <BrowserRouter>
            {/* <Routes>
                <Route path="/" element={<MainLayout />} />
            </Routes> */}
            <Routes>
                <Route path="/" element={<MainLayout />} >
                {/* This route is for the home page */}
                    <Route path="/" element={<HomePage />} />
                    {/* This route is for the login page */}
                    <Route path="/login" element={<LoginPage/>} />
                    {/* This route is for the registration page*/}
                    <Route path="/register" element={<RegistrationPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;