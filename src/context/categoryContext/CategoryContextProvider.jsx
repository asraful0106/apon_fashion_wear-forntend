import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import categoryContext from "./CategoryContext";
import axios from "axios";

const CategoryContextProvider = ({children}) => {
    // State
    const [categoryLoading, setCategoryLoading] = useState(false);
    const [categoryError, setCategoryError] = useState("");
    const [categoryData, setCategoryData] = useState(null);

    // Getting the link from the .env file
    const backendSiteLink = import.meta.env.VITE_BACKEND_SITE_LINK;


    // Fetching the data using Axios
    useEffect(() =>{
        setCategoryLoading(true);
        axios.get(`${backendSiteLink }/category`) //api url for getting the category
        .then(res =>{
            // Setting the data
            setCategoryData(res.data);
            setCategoryLoading(false);
        })
        // eslint-disable-next-line no-unused-vars
        .catch(err =>{
            setCategoryError("Faild to fetch category");
            setCategoryLoading(false);
            // console.log(err);
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <categoryContext.Provider value={{ categoryLoading, setCategoryLoading, categoryError, setCategoryError, categoryData, setCategoryData} }>
            {children}
        </categoryContext.Provider>
    );
};
CategoryContextProvider.propTypes = {
    children: PropTypes.any,
};

export default CategoryContextProvider;