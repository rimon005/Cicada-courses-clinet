import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext/AuthProvider';
import { FaGoogle , FaGithub} from "react-icons/fa";
import './style.css'

const Login = () => {

    const { createUser , googleSignIn , setUser, gitHubSignIn} = useContext(AuthContext);


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;


        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
            })
            .catch(e => {
                console.error(e);
            });
    }

    const handleGoogleSingIn = () =>{
        googleSignIn()
        .then(result => {
            const user = result.user;
            setUser(user);
            console.log(user);
        })
        .catch(e => console.error(e))
    }

    const handleGitHubSignIn = () =>{
        gitHubSignIn()
        .then(result =>{
            const user =result.user;
            setUser(user);
            console.log(user);
        })
        .catch(e => console.error(e))
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-col">
                <form onSubmit={handleSubmit} className="card flex-shrink-0 w-96 max-w-sm shadow-2xl bg-base-100">
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
                            <input type="email" placeholder="email" name='email' required />
                        </div>
                        <div className="form-control email">
                            <input type="password" placeholder="password" name='password' required />
                        </div>
                        <div className="form-control mt-6">
                            <button>
                                <input className='w-full btn-submit btn btn-outline btn-success' type="submit" value="Register" />
                            </button>
                        </div>
                        <div className='border p-4 flex justify-center'>
                            <FaGoogle className='text-3xl mx-3' onClick={handleGoogleSingIn}> </FaGoogle>
                            <FaGithub className='text-3xl' onClick={handleGitHubSignIn}></FaGithub>
                        </div>
                        <p>You do have an account <Link className='btn-link' to='/login'>login</Link> </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;