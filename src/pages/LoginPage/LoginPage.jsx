import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import LoginReg from '../../sharedComponent/LoginReg';

const LoginPage = () => {
    // For AOS Animation
    useEffect(() =>{
        AOS.init();
    },[]);

    return (
        <div data-aos="fade-up" className='flex items-center justify-center'>
            <LoginReg isLogin={true}/>
        </div>
    );
};

export default LoginPage;