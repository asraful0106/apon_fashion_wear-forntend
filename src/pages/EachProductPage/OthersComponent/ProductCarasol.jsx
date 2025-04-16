import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./ProductCarasol.css";

const ProductCarasol = ({ images }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const scrollRef = useRef(null);
    const activeRef = useRef(null);

    // Scroll to active thumbnail when slide changes
    // console.log("Images: ", images);
    useEffect(() => {
        if (activeRef.current && scrollRef.current) {
            scrollRef.current.scrollTo({
                left:
                    activeRef.current.offsetLeft -
                    scrollRef.current.offsetWidth / 2 +
                    activeRef.current.offsetWidth / 2,
                behavior: "smooth",
            });
        }
    }, [currentSlide]);

    return (
        <>
            {/* Carousel Section */}
            <div className="carousel w-full relative">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`carousel-item inset-0 w-full h-48 md:h-[30rem] ${index === currentSlide ? "opacity-100 block" : "opacity-0 hidden"
                            } transition-opacity duration-500`}
                    >
                        <img
                            src={image}
                            className="w-full h-full object-cover cursor-pointer"
                            alt={`Slide ${index}`}
                            onClick={() => setIsFullScreen(true)}
                        />
                    </div>
                ))}
            </div>

            {/* Scrollable Thumbnail Section */}
            <div className="flex w-full justify-center items-center py-2 overflow-hidden">
                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto no-scrollbar scroll-smooth px-2"
                    style={{ whiteSpace: "nowrap", display: "flex", flexWrap: "nowrap" }}
                >
                    {images.map((image, index) => (
                        <div
                            key={index}
                            ref={index === currentSlide ? activeRef : null}
                            onClick={() => setCurrentSlide(index)}
                            className={`inline-block cursor-pointer border-2 ${index === currentSlide ? "border-gray-600 rounded-md overflow-hidden" : "border-transparent"
                                }`}
                            style={{ flex: "0 0 auto", width: "auto", height: "auto", marginRight: "8px" }}
                        >
                            <div className={`h-20 w-16 rounded-md ${index !== currentSlide ? "overflow-hidden opacity-50" : ""}`}>
                                <img
                                    className="h-full w-full object-cover"
                                    src={image}
                                    alt={`Thumbnail ${index}`}
                                    style={{ maxWidth: "none" }} // Ensures original width
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Full Screen Modal */}
            {isFullScreen && (
                <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50">
                    <button
                        className="absolute top-5 right-5 text-white text-3xl"
                        onClick={() => setIsFullScreen(false)}
                    >
                        &times;
                    </button>
                    <img
                        src={images[currentSlide]}
                        className="max-w-full max-h-full"
                        alt="Full Screen"
                    />
                </div>
            )}
        </>
    );
};

ProductCarasol.propTypes = {
    images: PropTypes.array.isRequired,
};

export default ProductCarasol;
