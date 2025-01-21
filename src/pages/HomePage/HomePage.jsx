import Carousel from "./OtherComponent/Carousel";

const HomePage = () => {
    const imagesForCarousel = [
        "https://d1190btxnvweoc.cloudfront.net/uploads/all/eic1Yc2Ef1FwmpUyq6jzesnqeYERlmGu9hjOGhXD.jpg",
        "https://d1190btxnvweoc.cloudfront.net/uploads/all/OkNGx6lUZ12HGqH9ZJjgD5HK5EfrJESP7Rpxz2Xb.jpg",
        "https://d1190btxnvweoc.cloudfront.net/uploads/all/Q6XhtuUom4LTc5oeVu3wsMSWzhJLWElbdIzIkd9h.jpg",
    ];
    return (
        <div>
            <div className="h-[15rem] md:h-[30rem] overflow-hidden relative">
                <Carousel images={imagesForCarousel} />
            </div>
            
        </div>
    );
};

export default HomePage;