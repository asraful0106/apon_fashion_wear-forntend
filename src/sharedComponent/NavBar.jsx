import { useContext } from "react";
import { NavLink } from "react-router";
import categoryContext from "../context/categoryContext/CategoryContext";

const NavBar = () => {
    // Context API
    const { categoryData } = useContext(categoryContext);

    return (
        <nav>
            <div className="navbar bg-black">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        {/* Nevigation Item */}
                        {/* for mobile */}
                        {/* Mobile Menu */}
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-black text-white rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {
                                categoryData?.map(category => (
                                    category?.sub_category?.length === 0 ? (
                                        <li key={category?.category_id}><a>{category?.category_name}</a></li>
                                    ) : (
                                        <li key={category?.category_id}>
                                            <details>
                                                <summary>{category?.category_name}</summary>
                                                <ul className="p-2 border-l-2 rounded-sm border-gray-500">
                                                    {
                                                        category?.sub_category?.map(subCategory => (
                                                            <li key={subCategory?.sub_category_id}>
                                                                <a>{subCategory?.sub_category_name}</a>
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                            </details>
                                        </li>
                                    )
                                ))
                            }
                        </ul>
                        {/* <ul 
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-black text-white rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2 border-l-2 rounded-sm border-gray-500">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul> */}
                    </div>
                    {/* Shop Logo */}
                    <a className="btn btn-ghost text-xl text-white">daisyUI</a>
                </div>
                {/* For dextop */}
                <div className="navbar-center hidden lg:flex text-white">
                    <ul className="menu menu-horizontal px-1">
                        {
                            categoryData?.map(category => (
                                category?.sub_category?.length === 0 ?
                                    <li key={category?.category_id}><a>{category?.category_name}</a></li>
                                    :
                                    <li key={category?.category_id}>
                                        <details>
                                            <summary>{category?.category_name}</summary>
                                            <ul className="!mt-[1.1rem] p-2 bg-black min-w-[9em] max-w-[15em] z-30">
                                                {
                                                    category?.sub_category?.map(subCategory => (
                                                        <li key={subCategory?.sub_category_id}><a>{subCategory?.sub_category_name}</a></li>
                                                    ))
                                                }
                                            </ul>
                                        </details>
                                    </li>
                            ))
                        }

                    </ul>
                </div>
                <div className="navbar-end">
                    {/* --- Navber end items----- */}
                    <div className="flex items-center justify-center">
                        {/* search bar */}
                        {/* mobile */}
                        <div className="dropdown lg:hidden">
                            <div className="m-0 p-0">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-white m-0 p-0"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </div>
                        {/* For dextop */}
                        <div className="navbar-center hidden lg:flex">
                            <div className="form-control">
                                <input type="text" placeholder="Search" className="input w-24 md:w-auto text-white bg-black border-[1px] border-gray-500 focus:border-gray-500" />
                            </div>
                        </div>
                        {/* -- */}
                        <div className="dropdown dropdown-end">
                            {/* Cart Logo */}
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                <div className="indicator">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    <span className="badge badge-sm indicator-item">8</span>
                                </div>
                            </div>
                            {/* Cart Item */}
                            <div
                                tabIndex={0}
                                className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                                <div className="card-body bg-black rounded-box">
                                    <span className="text-white text-lg font-bold">8 Items</span>
                                    <span className="text-info">Subtotal: $999</span>
                                    <div className="card-actions">
                                        <button className="btn btn-primary btn-block">View cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ---Profile Image--- */}
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-black text-white rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                {/* <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li> */}
                                <li><NavLink to={'/login'}>Login</NavLink></li>
                                <li><NavLink to={'/register'}>Register</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        
    );
};

export default NavBar;