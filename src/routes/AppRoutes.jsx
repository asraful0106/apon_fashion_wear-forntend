import { BrowserRouter, Route, Routes } from 'react-router';
import MainLayout from '../layout/MainLayout';
import HomePage from '../pages/HomePage/HomePage';
import LoginPage from '../pages/LoginPage/LoginPage';
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage'
import EachProductPage from '../pages/EachProductPage/EachProductPage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';

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
                    {/* Page For Each Products */}
                    <Route path="/product/:product_id" element={<EachProductPage/>}/>
                </Route>
                {/* Error page(Not Found Page) */}
                <Route path='*' element={<ErrorPage/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;