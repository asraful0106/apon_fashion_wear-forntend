import { useContext } from "react";
import ProductCard from "../../sharedComponent/productCard/ProductCard";
import Carousel from "./OtherComponent/Carousel";
import Catagory from "./OtherComponent/Catagory";
import FlyInOutText from "./OtherComponent/Fly-in-out-text/FlyInOutText";
import categoryContext from "../../context/categoryContext/CategoryContext";
import BannerContext from "../../context/BannerContext/BannerContext";
import MetaProvieder from "../../helper/MetaProvieder";

const HomePage = () => {
    // Context API
    const { categoryData } = useContext(categoryContext);
    const { bannerData } = useContext(BannerContext);
    // console.log("data: ", categoryData);

    // *******************Fake data*********************************
    const product_list = [
        {
            "product_id": 101,
            "name": "Mens Knit Sports T-Shirt",
            "price": 1550,
            "original_price": 2499,
            "discount_percentage": 20,
            "image": "https://cdn.bitcommerz.com/manfarebd/media/1716904891005-manfarebd-id-13.jpeg",
            "rating": 4.5
        },
        {
            "product_id": 102,
            "name": "Womens Casual Jeans",
            "price": 1999,
            "original_price": 2999,
            "discount_percentage": 33,
            "image": "https://assets.myntassets.com/h_1440,q_90,w_1500/v1/assets/images/30063334/2024/6/28/fd1a144c-869b-4ef6-9ba6-3f1f260e60411719566259702Womensdenimcargotrouserwith3Dbaggyfrontpocketsandloops2.jpg",
            "rating": 4.2
        },
        {
            "product_id": 103,
            "name": "Kids Winter Sweater",
            "price": 850,
            "original_price": 1500,
            "discount_percentage": 43,
            "image": "https://media.istockphoto.com/id/1180369198/photo/winter-portrait-of-happy-children.jpg?s=612x612&w=0&k=20&c=XIPGl3abW8We99MgURR0S1HDu_iYCpajdP50HTnfmhk=",
            "rating": 4.7
        },
        {
            "product_id": 104,
            "name": "Mens Leather Jacket",
            "price": 4999,
            "original_price": 8999,
            "discount_percentage": 44,
            "image": "https://leatherskinshop.com/cdn/shop/articles/how-should-a-leather-jacket-fit-mens_4ab0478c-51be-483e-ae03-d2b9150c14a7_1400x.progressive.png.jpg?v=1719189267",
            "rating": 4.8
        },
        {
            "product_id": 105,
            "name": "Womens Running Shoes",
            "price": 2899,
            "original_price": 3999,
            "discount_percentage": 28,
            "image": "https://assets.myntassets.com/h_720,q_90,w_800/v1/assets/images/26257134/2024/3/27/f8644fb7-816c-4036-b13c-c4edc73f362c1711539349242-Red-Tape-Women-Mesh-Walking-Shoes-4961711539348840-1.jpg",
            "rating": 4.4
        },
        {
            "product_id": 106,
            "name": "Unisex Hooded Sweatshirt",
            "price": 1799,
            "original_price": 2499,
            "discount_percentage": 28,
            "image": "https://www.fugazee.com/cdn/shop/products/IMG_9101.jpg",
            "rating": 4.6
        },
        {
            "product_id": 107,
            "name": "Kids Cotton T-Shirt",
            "price": 599,
            "original_price": 999,
            "discount_percentage": 40,
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwhv5BKaqjKwmN9arxeZdZp0GYKbeshFr23yH70CeDSuaxpLTL-FoPzpCMrPMQvyBaUsc&usqp=CAU",
            "rating": 4.3
        },
        {
            "product_id": 108,
            "name": "Mens Casual Shoes",
            "price": 3299,
            "original_price": 4999,
            "discount_percentage": 34,
            "image": "https://toffpark.com/wp-content/uploads/2023/12/flat-bottom-leather-driving-casual-shoe-black_.jpg",
            "rating": 4.7
        },
        {
            "product_id": 109,
            "name": "Womens Party Dress",
            "price": 2599,
            "original_price": 3999,
            "discount_percentage": 35,
            "image": "https://i.etsystatic.com/18573036/r/il/294e2c/2458401896/il_300x300.2458401896_hpih.jpg",
            "rating": 4.5
        },
        {
            "product_id": 110,
            "name": "Unisex Sports Cap",
            "price": 450,
            "original_price": 899,
            "discount_percentage": 50,
            "image": "https://headgearbd.com/cdn/shop/files/Artboard1copy8_720x.jpg?v=1737036942",
            "rating": 4.2
        },
        {
            "product_id": 111,
            "name": "Kids Fleece Jacket",
            "price": 1299,
            "original_price": 1999,
            "discount_percentage": 35,
            "image": "https://cdn11.bigcommerce.com/s-ca7b7/images/stencil/2048x2048/products/2812/15344/201720_Fleecejacke_Colori_mod__74495.1661483859.jpg?c=2",
            "rating": 4.6
        },
        {
            "product_id": 112,
            "name": "Mens Formal Trousers",
            "price": 2199,
            "original_price": 2999,
            "discount_percentage": 27,
            "image": "https://menova.com.bd/wp-content/uploads/2024/09/041-Dark-Navy-Plain.jpg",
            "rating": 4.3
        },
        {
            "product_id": 113,
            "name": "Womens Handbag",
            "price": 3499,
            "original_price": 4999,
            "discount_percentage": 30,
            "image": "https://www.yellowclothing.net/cdn/shop/files/IMG_7831.jpg?v=1717916084",
            "rating": 4.8
        },
        {
            "product_id": 114,
            "name": "Unisex Sunglasses",
            "price": 1499,
            "original_price": 2499,
            "discount_percentage": 40,
            "image": "https://www.shopz.com.bd/wp-content/uploads/2023/09/UV400-Polarized-Sunglasses-Luxury-Square-Vintage-For-Men-1-300x300.jpg",
            "rating": 4.6
        },
        {
            "product_id": 115,
            "name": "Mens Leather Belt",
            "price": 999,
            "original_price": 1499,
            "discount_percentage": 33,
            "image": "https://www.nappadori.com/cdn/shop/files/twin-loop-2_1200x.jpg?v=1735645272",
            "rating": 4.4
        }
    ];

    // *******************************************************
    return (
        <div>
            {/* For Meta Data */}
            <MetaProvieder />
            {/* Main Content */}
            <div className="w-full relative">
                {/* Carousel Image Container */}
                <div className="h-[15rem] md:h-[30rem] overflow-hidden relative">
                    <Carousel images={bannerData} />
                </div>
                {/* Motive Text Container*/}
                <div className="mt-2 absolute left-[26%] md:left-[45%] transform translate-x-1/2">
                    <FlyInOutText /> {/* Fly in out Text Effect */}
                </div>
            </div>
            {/* Category Section */}
            <div className="mt-8">
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
                            categoryData?.map((category) => <Catagory key={category.category_id} imageLink={category.category_image} categoryName={category.category_name} />)
                        }

                    </div>
                </div>
            </div>
            {/* Fetured Section */}
            <div className="mb-6">
                {/* horizontal Featured heading */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="flex-grow h-[1px] bg-black"></div>
                    <h1 className="text-lg">Featured</h1>
                    <div className="flex-grow h-[1px] bg-black"></div>
                </div>
                {/* Fetured Product */}
                <div className="overflow-hidden flex items-center justify-center">
                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-2 lg:gap-x-6 gap-y-4">
                        {
                            product_list.map((product, index) => <ProductCard key={index} name={product.name} price={product.price} original_price={product.original_price} discount_percentage={product.discount_percentage} image={product.image} rating={product.rating} />)
                        }
                    </div>
                </div>
                {/* Load More Button */}
                <div className="flex items-center justify-center mt-6 lg:mt-4">
                    <button className="py-2 px-4 bg-black rounded text-white hover:bg-[#313131] font-bold text-sm">Load More</button>
                </div>
            </div>

        </div>
    );
};

export default HomePage;