

import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useUserStore from '../../Store/UserStore';
import { Link } from 'react-router-dom';
import './Authentification.css'

const apiurl = import.meta.env.VITE_API_URL_ROOT;

const Signin = () => {
    const captureUser = useUserStore((state) => state.captureUser);
    const users = useUserStore((state) => state.users);

    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (formState) => {
        try {
            const response = await fetch(`${apiurl}/api/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formState),
                credentials: "include"
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            captureUser(data); 
            console.log(data);

            if (data.success === true) {
                if (data.data.role === 'admin'){
                    navigate('/admin');
                }else{
                    navigate('/employee');
                }
            } else {
                setError(data.message);
            }
        } catch (error) {
            setError(error.message); 
        }
    };

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        onSubmit: handleSubmit,
    });

    return (
        <section>
            
            <form onSubmit={formik.handleSubmit} className='form'>
            <h1>Sign in here</h1>
                <div className="form-items">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formik.values.username}
                        onChange={formik.handleChange}
                    />
                </div>
                <div className="form-items">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                    />
                </div>
                <div className="form-items">
                    <button type="submit">Sign in</button>
                </div>
                <p className="form-text">
                    Don't have an account? <Link to="/signup">Sign up</Link>
                </p>
                {error && <p className="errMsg">{error}</p>}
            </form>
        </section>
    );
};

export default Signin;
