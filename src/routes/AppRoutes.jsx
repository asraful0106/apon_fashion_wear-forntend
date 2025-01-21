import { BrowserRouter, Route, Routes } from 'react-router';
import MainLayout from '../layout/MainLayout';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;