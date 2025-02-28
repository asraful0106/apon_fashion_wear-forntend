import { useState, useEffect } from "react";
import PropTypes from 'prop-types';

const Carousel = ({ images }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);


    // Getting backend link from environment variable
    const bacekendLink = import.meta.env.VITE_BACKEND_SITE_LINK;

    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % images?.length);
        }, 3000); // Change image every 3 seconds
        return () => clearInterval(interval);
    }, [images?.length, isPaused]);



    if (images?.length === 0) {
        return <div className="text-center">No images to display</div>;
    }

    return (
        <div
            className="carousel w-full"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {images?.map((image, index) => (
                <div
                    key={index}
                    className={`carousel-item absolute inset-0 w-full ${index === currentSlide ? "opacity-100" : "opacity-0"
                        } transition-opacity duration-500`}
                >
                    <img src={`${bacekendLink}/image/${image.banner_image}`} className="w-full h-full sm:object-fill md:object-cover" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <button
                            className="btn btn-circle btn-ghost"
                            aria-label="Previous slide"
                            onClick={() =>
                                setCurrentSlide((prev) => (prev - 1 + images?.length) % images?.length)
                            }
                        >
                            ❮
                        </button>
                        <button
                            className="btn btn-circle btn-ghost"
                            aria-label="Next slide"
                            onClick={() =>
                            {
                                setCurrentSlide((prev) => (prev + 1) % images?.length);
                                setIsPaused(false);
                            }
                            }
                        >
                            ❯
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};
Carousel.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired
        })
    ).isRequired
};

export default Carousel;
