import { useEffect, useState } from "react";
import './FlyInOUtText.css';

const FlyInOutText = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => {
                // This ensures that the new index is based on the previous state
                return prevIndex >= 2 ? 0 : prevIndex + 1;
            });
        }, 5000);

        // Cleanup the interval on component unmount
        return () => clearInterval(interval);
    }, []); // Empty dependency array ensures this effect runs only once

    return (
        <div className="mainContainer">
            <div className="text-container w-[40%] md:w-[15%]">
                {
                    activeIndex == 0 && <p className="text text-xs ml-6">Shipping countrywide</p>
                }
                {
                    activeIndex == 1 && <p className="text text-xs">Estimated delivery time: 5-8 days</p>
                }
                {
                    activeIndex == 2 && <p className="text text-xs ml-6">Apon Fashion Wear</p>
                }
            </div>
        </div>
    );
};

// function Text({
//     text,
//     isActive
// }) {
//     return (
//         <section className="panel">
//             {isActive && (
//                 <p>{text}</p>
//             )}
//         </section>
//     );
// }

export default FlyInOutText;