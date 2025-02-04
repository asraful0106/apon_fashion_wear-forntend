import ProductCarasol from "./OthersComponent/ProductCarasol";
import { PiShareNetworkThin } from "react-icons/pi";

const EachProductPage = () => {
    const product = {
        "id": 110,
        "name": "Interlock Knit Bomber Jacket",
        "description": "<p>Made from super comfortable fabric, this jacket is perfect for effortlessly combining style and comfort. This interlock knit bomber jacket combines comfort with stylish details. Featuring a patch pocket with a flap for added practicality, it also includes ribbed cuffs and hem for a tailored fit. Contrast tipping adds a subtle yet eye-catching accent, while an embroidered logo on the chest enhances its modern appeal.<p/>< li ><ul>nterlock knit bomber jacket<ul /><ul>Patch pocket with flap pocket<ul /><ul>Ribbed detailed at cuff and hem<ul /><ul>Contrast tipping detail<ul /><ul>Embroidered logo on chest<ul /><ul>Super comfortable fabric<ul /><li />",
        "price": 1999.99,
        "createdAt": "2025-01-28T10:00:00.000Z",
        "updatedAt": "2025-01-28T10:00:00.000Z",
        "colors": [
            {
                "id": 1,
                "name": "Cabenet Mellange",
                "images": [
                    {
                        "id": 1,
                        "url": "https://www.yellowclothing.net/cdn/shop/files/DSC3456_f12b0174-54f7-4635-8aac-a8b39a3e4362.jpg?v=1730184264"
                    },
                    {
                        "id": 2,
                        "url": "https://www.yellowclothing.net/cdn/shop/files/DSC3467_120e6884-e4ba-4216-9865-b0404b39d5c2.jpg?v=1730184264"
                    }
                ],
                "inventories": [
                    {
                        "id": 1,
                        "count": 100,
                        "size": {
                            "id": 1,
                            "name": "S"
                        }
                    },
                    {
                        "id": 2,
                        "count": 150,
                        "size": {
                            "id": 2,
                            "name": "M"
                        }
                    }
                ]
            },
            {
                "id": 2,
                "name": "Teal Mellange",
                "images": [
                    {
                        "id": 3,
                        "url": "https://www.yellowclothing.net/cdn/shop/files/DSC06343_c7eb672a-b308-4c94-8ca4-259a0853d8c3.jpg?v=1730184279"
                    },
                    {
                        "id": 4,
                        "url": "https://www.yellowclothing.net/cdn/shop/files/DSC06374.jpg?v=1730184279"
                    }
                ],
                "inventories": [
                    {
                        "id": 3,
                        "count": 50,
                        "size": {
                            "id": 1,
                            "name": "S"
                        }
                    },
                    {
                        "id": 4,
                        "count": 75,
                        "size": {
                            "id": 3,
                            "name": "L"
                        }
                    }
                ]
            }
        ]
    };

    const imagesForCarousel = [
        "https://d1190btxnvweoc.cloudfront.net/uploads/all/eic1Yc2Ef1FwmpUyq6jzesnqeYERlmGu9hjOGhXD.jpg",
        "https://d1190btxnvweoc.cloudfront.net/uploads/all/OkNGx6lUZ12HGqH9ZJjgD5HK5EfrJESP7Rpxz2Xb.jpg",
        "https://d1190btxnvweoc.cloudfront.net/uploads/all/Q6XhtuUom4LTc5oeVu3wsMSWzhJLWElbdIzIkd9h.jpg",
    ];


    return (
        <div>
            <div className="flex flex-col md:flex-row w-full md:justify-between">
                {/* Product Carasol */}
                <div className="mx-0 md:mx-6 my-0 md:my-4 w-full md:w-[50%]">
                    <ProductCarasol images={imagesForCarousel} />
                </div>

                {/* Product Details */}
                <div className="mx-0 md:mx-6 my-0 md:my-4 w-full md:w-[50%]">
                    {/* Product Name and share button */}
                    <div className="flex items-center justify-between gap-2">
                        <h1 className="text-xl font-bold">
                            Relaxed Fit Cotton Hoodie with Adjustable Hood
                        </h1>
                        <div className="flex items-center justify-center gap-[1px] hover:cursor-pointer hover:text-blue-600">
                            <PiShareNetworkThin className="text-2xl" />
                            <p className="underline text-sm">Share</p>
                        </div>
                    </div>
                    <div className="my-2 flex flex-col gap-1">
                        {/* Product Code */}
                        <p className="text-xs">SKU: MTHODT252 WI24-25</p>
                        {/* Product Category */}
                        <p className="text-xs">Category: Men Wear</p>
                    </div>
                    {/* Product Price */}
                    <h1 className="text-xl font-bold mb-6">
                        Tk 2,695.00
                    </h1>
                    {/* Product Color Heading*/}
                    <p className="text-sm">Color - CANTON</p>

                    {/* Product Color Image Box*/}
                    <div className="mt-4 mb-4 flex gap-6">
                        <div className={`w-[6rem] h-[6rem] border p-1`}>
                            <img className="w-full h-full object-cover" src="https://cdn.shopify.com/s/files/1/0305/5789/6843/files/DSC00148.jpg?v=1728977125&width=160&height=160&crop=top" alt="" />
                        </div>
                        <div className={`w-[6rem] h-[6rem] border p-1`}>
                            <img className="w-full h-full object-cover" src="https://cdn.shopify.com/s/files/1/0305/5789/6843/files/DSC00148.jpg?v=1728977125&width=160&height=160&crop=top" alt="" />
                        </div>
                    </div>
                    {/* Size */}
                    <div>
                        <h6 className="text-sm font-medium mb-3">Size</h6>
                        <div className="flex items-center gap-3">
                            <div className={`py-3 px-5 border border-black rounded-full hover:cursor-pointer`}>
                                <p className="text-sm">S</p>
                            </div>
                            <div className={`p-3 border border-black rounded-full hover:cursor-pointer`}>
                                <p className="text-sm">XXL</p>
                            </div>
                        </div>
                    </div>
                    {/* Add to cart and Buy it now button */}
                    <div className="w-full flex item-center justify-center mt-11">
                        <div className="flex flex-col gap-3">
                            <button className="bg-black hover:bg-green-500 text-white py-3 px-16 rounded  border border-black hover:border-green-500 transition duration-[600ms]">
                                BUY IT NOW
                            </button>
                            <button className="bg-white hover:bg-red-500 text-black hover:text-white py-3 px-16 border border-black hover:border-red-500 rounded transition duration-[600ms]">
                                ADD TO CART
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EachProductPage;