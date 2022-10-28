import React from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext/AuthProvider';
import './style.css'
import { FaGoogle,FaGithub} from "react-icons/fa";
import { useState } from 'react';

const Login = () => {

    const { signIn, googleSignIn, setUser , gitHubSignIn , setLoading} = useContext(AuthContext);
    const [error , setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset()
                navigate(from , {replace: true}) 
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
            .finally(() => {
                setLoading(false);
            })

    }

    const handleGoogleSingIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                setUser(user);
                console.log(user);
            })
            .catch(e =>{ 
                 console.error(e)
                setError(e.message)
                })
    }

    const handleGitHubSignIn = () =>{
        gitHubSignIn()
        .then(result =>{
            const user =result.user;
            setUser(user);
            console.log(user);
        })
        .catch(e => {
            setError(e.message)
            console.error(e)
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-col">
                <form onSubmit={handleSubmit} className="card flex-shrink-0 w-96 max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="text-center lg:text-left">
                            <h1 className="text-2xl font-bold text-center">Login now!</h1>
                        </div>
                        <div className="form-control email">
                            <input type="email" placeholder="email" name='email' required />
                        </div>
                        <div className="form-control email">
                            <input type="password" placeholder="password" name='password' required />
                        </div>
                        <p className='text-warning'>{error}</p>
                        <div className="form-control mt-6">
                            <button>
                                <input className='w-full btn-submit btn btn-outline btn-success' type="submit" value="Login" />
                            </button>
                        </div>
                        <div className='border p-4 flex justify-center'>
                            <FaGoogle className='text-3xl mx-3' onClick={handleGoogleSingIn}> </FaGoogle>
                            <FaGithub className='text-3xl' onClick={handleGitHubSignIn}></FaGithub>
                        </div>
                        <p>You do'nt have an account <Link className='btn-link' to='/register'>register</Link> </p>
                    </div>

                </form>

            </div>
        </div>
    );
};

export default Login;