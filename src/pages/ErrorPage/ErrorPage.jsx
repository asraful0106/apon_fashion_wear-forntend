import { useNavigate } from 'react-router';

const ErrorPage = () => {
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/');
    };

    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="mb-20">
                {/* Eror image */}
                <div className="w-full md:w-[60rem] relative">
                    <img className=" w-full h-full object-cover" src="/error.gif" alt="Page not found!" />
                    <h1 className="absolute left-1/2 transform -translate-x-1/2 bottom-1 lg:bottom-28 font-bold text-5xl lg:text-6xl">404</h1>
                </div>
                {/* Error text container */}
                <div className="text-center mt-8 md:mt-0">
                    <h1 className="text-xl lg:text-3xl font-bold">Oopsie! Something&apos;s missing....</h1>
                    <p className="mt-2 text-gray-500 font-semibold">It seems like we donut find what you searched. The page you were looking for doesn&apos;t exist, is&apos;t available or was loading incorrectly.</p>
                </div>
                <div className="w-full flex items-center justify-center my-6">
                    <button onClick={handleNavigation} className="py-2 px-6 bg-green-500 rounded-lg text-white font-bold">Home</button>
                </div> 
            </div>
        </div>
    );
};

export default ErrorPage;