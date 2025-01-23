import Carousel from "./OtherComponent/Carousel";
import Catagory from "./OtherComponent/Catagory";
import FlyInOutText from "./OtherComponent/Fly-in-out-text/FlyInOutText";

const HomePage = () => {
    const imagesForCarousel = [
        "https://d1190btxnvweoc.cloudfront.net/uploads/all/eic1Yc2Ef1FwmpUyq6jzesnqeYERlmGu9hjOGhXD.jpg",
        "https://d1190btxnvweoc.cloudfront.net/uploads/all/OkNGx6lUZ12HGqH9ZJjgD5HK5EfrJESP7Rpxz2Xb.jpg",
        "https://d1190btxnvweoc.cloudfront.net/uploads/all/Q6XhtuUom4LTc5oeVu3wsMSWzhJLWElbdIzIkd9h.jpg",
    ];
    const categorysInfo = [
        {
            "name":"Shirts",
            "image_link": "https://www.yellowclothing.net/cdn/shop/files/Shirts_4bc8f2e8-b53c-46a0-8ad2-17e7ba80b51d_785x.png?v=1730875766"
        },
        {
            "name":"Jackets and Hodies",
            "image_link": "https://www.yellowclothing.net/cdn/shop/files/Jackets_Hoodies_b3b8ab6e-8834-44f5-b72b-dc11b36bacd4_785x.png?v=1730875812"
        },
        {
            "name": "Fashion Tops",
            "image_link": "https://www.yellowclothing.net/cdn/shop/files/Shirts_4bc8f2e8-b53c-46a0-8ad2-17e7ba80b51d_785x.png?v=1730875766"
        },
        {
            "name": "Lawn and Suits",
            "image_link": "https://www.yellowclothing.net/cdn/shop/files/Lawn_1_2_3_Pieces_23d76168-a6ef-4408-9ef6-141d9df89185_785x.png?v=1730875921"
        },
        {
            "name": "Chilren",
            "image_link": "https://www.yellowclothing.net/cdn/shop/files/Girls_0d287516-a9d3-4c07-87aa-23e83aed97b9_470x.png?v=1722337716"
        },
        {
            "name": "Accessorys",
            "image_link": "https://www.yellowclothing.net/cdn/shop/files/Accessories_a9d6150a-a7d0-4086-892e-bf98566d884b_785x.png?v=1730875948"
        },

    ];
    return (
        <div>
            {/* Carousel Image Container */}
            <div className="h-[15rem] md:h-[30rem] overflow-hidden relative">
                <Carousel images={imagesForCarousel} />
            </div>
            {/* Motive Text Container*/}
            <div className="mt-2">
                <FlyInOutText /> {/* Fly in out Text Effect */}
            </div>
            {/* Category Section */}
            <div className="mt-2">
                {/* horizontal cetagory heading */}
                <div className="flex items-center gap-4 mb-2">
                    <div className="flex-grow h-[1px] bg-black"></div>
                    <h1 className="text-lg">Top Categories</h1>
                    <div className="flex-grow h-[1px] bg-black"></div>
                </div>
                {/* Category card */}
                <div className="mt-10 mb-4 mx-4 flex items-center justify-center overflow-hidden">
                    <div className="grid grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2 lg:gap-y-6">
                        {
                            categorysInfo.map((category, index) => <Catagory key={index} imageLink={category.image_link} categoryName={category.name} />)
                        }

                    </div>
                </div>
            </div>
            {/* Fetured Section */}
            <div>
                {/* horizontal Featured heading */}
                <div className="flex items-center gap-4 mb-4">
                    <div className="flex-grow h-[1px] bg-black"></div>
                    <h1 className="text-lg">Featured</h1>
                    <div className="flex-grow h-[1px] bg-black"></div>
                </div>
            </div>

        </div>
    );
};

export default HomePage;