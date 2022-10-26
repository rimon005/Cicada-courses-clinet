import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

const Login = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-col">
                <form className="card flex-shrink-0 w-96 max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="text-center lg:text-left">
                            <h1 className="text-2xl font-bold text-center">Login now!</h1>
                        </div>
                        <div className="form-control email">
                            <input type="text" placeholder="email" name='email' />
                        </div>
                        <div className="form-control email">
                            <input type="text" placeholder="password" name='password' />
                        </div>
                        <div className="form-control mt-6">
                            <button>
                                <input className='w-full btn-submit btn btn-outline btn-success' type="submit" value="Login" />
                            </button>
                        </div>
                        {/* <p>You do'nt have an account <Link to='/register'></Link> </p> */}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;