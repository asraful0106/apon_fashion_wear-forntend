import LoginReg from '../../sharedComponent/LoginReg';

const RegistrationPage = () => {
    return (
        <div data-aos="fade-up" className='flex items-center justify-center'>
            <LoginReg isLogin={false}/>
        </div>
    );
};

export default RegistrationPage;