import ProductCarasol from "./OthersComponent/ProductCarasol";

const EachProductPage = () => {
    const product = {
        "id": 101,
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


    return (
        <div>
            <div>
                {/* Product Carasol */}
                <ProductCarasol/>
            </div>
        </div>
    );
};

export default EachProductPage;