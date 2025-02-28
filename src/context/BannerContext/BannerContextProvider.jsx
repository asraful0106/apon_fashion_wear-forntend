import { useEffect, useState } from "react";
import BannerContext from "./BannerContext";
import PropTypes from 'prop-types';
import axios from "axios";

const BannerContextProvider = ({ children }) => {
    // State 
    const [bannerLoading , setBannerLoading] = useState(false);
    const [bannerError, setBannerError] = useState("");
    const [bannerData, setBannerData] = useState(null);

    // Getting backend link from environment variable
    const bacekendLink = import.meta.env.VITE_BACKEND_SITE_LINK;

    // Fetching banner data from backend
    useEffect(() =>{
        setBannerLoading(true);
        axios.get(`${bacekendLink}/banner`) // api url getting banner data
            .then(res => {
                setBannerData(res.data);
                setBannerLoading(false);
            })
            // eslint-disable-next-line no-unused-vars
            .catch(err =>{
                setBannerError("Faild to fetch category");
                setBannerLoading(false);
            })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <BannerContext.Provider value={{bannerData, setBannerData, bannerLoading, setBannerLoading, bannerError, setBannerError}}>
            {children}
        </BannerContext.Provider>
    );
};

BannerContextProvider.propTypes = {
    children: PropTypes.any
}

export default BannerContextProvider;