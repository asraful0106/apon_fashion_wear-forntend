import PropTypes from 'prop-types';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const ProductCard = ({ name, price, original_price, discount_percentage, image, rating }) => {
    // For AOS animation
    useEffect(() =>{
        Aos.init();
    }, [])
    return (
        <div data-aos="zoom-in-down">
            <div className="relative flex w-40 h-72 lg:h-auto xl:w-full xl:max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xl">
                <a className="relative mx-3 mt-3 flex h-44 lg:h-60 overflow-hidden rounded-xl" href="#">
                    <img className="object-cover transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110" src={image} alt="product image" />
                    <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-1 py-[1px] lg:px-2 text-center text-[10px] lg:text-sm font-medium text-white">{discount_percentage}% OFF</span>
                </a>
                <div className="mt-2 xl:mt-4 px-5 lg:pb-5 mb-2 xl:mb-4">
                    <a href="">
                        <h5 className="text-sm lg:text-xl tracking-tight text-slate-900">{name}</h5>
                    </a>
                    <div className="mt-2 mb-5 flex items-center justify-between">
                        <p>
                            <span className="lg:text-base font-bold text-slate-900">৳{price}</span>
                            <span className="text-[10px] text-gray-600 line-through">৳{original_price}</span>
                        </p>
                        <div className="lg:flex items-center hidden lg:visible">
                            <svg aria-hidden="true" className="h-4 w-4 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            <svg aria-hidden="true" className="h-4 w-4 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            <svg aria-hidden="true" className="h-4 w-4 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            <svg aria-hidden="true" className="h-4 w-4 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            <svg aria-hidden="true" className="h-4 w-4 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            <span className="mr-2 ml-3 rounded-md bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">{rating}</span>
                        </div>
                        <div className="flex items-center justify-center xl:hidden">
                            <span className="mr-2 ml-3 rounded-md bg-yellow-200 px-2.5 py-0.5 text-[10px] font-semibold">{rating}</span>
                        </div>
                    </div>
                    <a href="" className="flex items-center justify-center rounded-md bg-slate-900 lg:px-5 py-1 lg:py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        Add to cart</a
                    >
                </div>
            </div>

        </div>
    );
};
ProductCard.propTypes ={
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    original_price: PropTypes.string.isRequired,
    discount_percentage: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
};
export default ProductCard;