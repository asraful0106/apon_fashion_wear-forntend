import PropsType from 'prop-types';

const LoginReg = ({ isLogin }) => {
    return (
        <>
            <div className="hero bg-white  mt-6 lg:mt-0 lg:min-h-screen w-full lg:w-[60rem]">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left ">
                        <h1 className="text-3xl lg:text-5xl font-bold">{isLogin ? "Login" :
                            "Registration"}</h1>
                        {/* <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p> */}
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 border border-[#cccccc69] lg:border-[#cccccca2] shadow-2xl">
                        <form className="card-body">
                            {
                                !isLogin &&
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Phone Number</span>
                                    </label>
                                        <input type="tel" pattern='[0-9]{11}' placeholder="phone number" name='phoneNumber' className="input input-bordered" required />
                                </div>
                            }
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='passowrd' className="input input-bordered" required />
                                {
                                    isLogin &&
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                }
                            </div>
                            {
                                !isLogin &&
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Confirm Password</span>
                                    </label>
                                    <input type="password" placeholder="confirm password" name='confirmPassword' className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Have an account? <span className='text-blue-600 font-bold'>Login</span></a>
                                    </label>
                                </div>
                            }
                            {
                                isLogin ?
                                    <div className="form-control mt-6">
                                        <button className="btn bg-black text-white">Login</button>
                                    </div>
                                    :
                                    <div className="form-control mt-6">
                                        <button className="btn bg-black text-white">Registration</button>
                                    </div>
                            }
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

LoginReg.propTypes = {
    isLogin: PropsType.bool.isRequired,
}

export default LoginReg;