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
                            <h1 className="text-2xl font-bold text-center">Register now!</h1>
                        </div>
                        <div className="form-control email">
                            <input type="text" placeholder="name" name='name' />
                        </div>
                        <div className="form-control email">
                            <input type="text" placeholder="photoURL" name='photoURL' />
                        </div>
                        <div className="form-control email">
                            <input type="email" placeholder="email" name='email' />
                        </div>
                        <div className="form-control email">
                            <input type="password" placeholder="password" name='password' />
                        </div>
                        <div className="form-control mt-6">
                            <button>
                                <input className='w-full btn-submit btn btn-outline btn-success' type="submit" value="Register" />
                            </button>
                        </div>
                        <p>You do have an account <Link className='btn-link' to='/login'>login</Link> </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;