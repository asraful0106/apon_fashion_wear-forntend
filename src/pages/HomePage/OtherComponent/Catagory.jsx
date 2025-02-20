import PropTypes from 'prop-types';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Catagory = ({imageLink, categoryName}) => {

    // Getting the link from the .env file
    const backendSiteLink = import.meta.env.VITE_BACKEND_SITE_LINK;
    imageLink = `${backendSiteLink}/image/${imageLink}`
    // For AOS animation
    useEffect(() =>{
        Aos.init();
    }, []);

    return (
        <div data-aos="flip-left" className='hover:cursor-pointer'>
            <div className="card w-24 h-32 md:h-auto md:w-auto shadow-xl mb-2 md:shadow-2xl">
                <figure>
                    <img className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
                        src={imageLink}
                        alt="Shoes" />
                </figure>
                <div className="">
                    <h5 className="py-1 text-xs md:text-base text-center">{categoryName}</h5>
                </div>
            </div>
        </div>
    );
};
Catagory.propTypes = {
    imageLink: PropTypes.string.isRequired,
    categoryName: PropTypes.string.isRequired,
}

export default Catagory;