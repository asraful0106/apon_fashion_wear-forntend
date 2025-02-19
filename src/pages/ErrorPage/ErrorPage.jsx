const ErrorPage = () => {
    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="mb-20">
                {/* Eror image */}
                <div className="w-full md:w-[60rem]">
                    <img className=" w-full h-full object-cover" src="/error.gif" alt="Page not found!" />
                </div>
                {/* Error text container */}
                <div className="text-center">
                    <h1 className="text-xl lg:text-3xl font-bold">Oopsie! Something&apos;s missing....</h1>
                    <p className="mt-2 text-gray-500 font-semibold">It seems like we donut find what you searched. The page you were looking for doesn&apos;t exist, is&apos;t available or was loading incorrectly.</p>
                </div>
                <div className="w-full flex items-center justify-center my-6">
                    <button className="py-2 px-6 bg-green-500 rounded-lg text-white font-bold">Home</button>
                </div> 
            </div>
        </div>
    );
};

export default ErrorPage;