import { BrowserRouter, Route, Routes } from 'react-router';
import MainLayout from '../layout/MainLayout';
import HomePage from '../pages/HomePage/HomePage';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            {/* <Routes>
                <Route path="/" element={<MainLayout />} />
            </Routes> */}
            <Routes>
                <Route path="/" element={<MainLayout />} >
                    <Route path="/" element={<HomePage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;