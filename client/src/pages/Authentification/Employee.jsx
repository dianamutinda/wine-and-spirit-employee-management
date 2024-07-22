import {useFormik} from 'formik'
import {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom';

const apiurl = import.meta.env.VITE_API_URL_ROOT;

const Employee = () =>{
    // const formik = useFormik({
    //         initialValues: {
    //             username:'',
    //             firstname:'',
    //             lastname:'',
    //             email: '',
    //             password: '',
    //             confirmPassword: ''
    //             },
    //             onSubmit: (formState) => {
    //                 console.log(formState);
    //             }
    //     })
    const [error, setError] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (formState) =>{
        try {
            const response = await fetch(`${apiurl}/api/users/request`,{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(formState)
            })
            const data = await response.json()
            console.log(data);
            if(data.success === true){
                navigate('/admin/approve')
        
            }else{
                setError(response.message)
            }
        } catch (error) {
            setError(error.message)
        }
    }


    const formik = useFormik({
        initialValues: {
            username:'',
            firstname:'',
            lastname:'',
            email: '',
            password: '',
            confirmPassword: ''
            },
            onSubmit: handleSubmit
    })
    return(
        <section>
            <h1>New Employee</h1>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-items">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name='username' value={formik.values.username} onChange={formik.handleChange}/>
                </div>
                <div className="form-items">
                    <label htmlFor="firstname">first name</label>
                    <input type="text" id="firstname" name='firstname' value={formik.values.firstname} onChange={formik.handleChange}/>

                </div>
                <div className="form-items">
                    <label htmlFor="lastname">last name</label>
                    <input type="text" id="lastname" name='lastname' value={formik.values.lastname} onChange={formik.handleChange}/>
                </div>
                <div className="form-items">
                    <label htmlFor="email">Email</label> 
                    <input type="email" id="email" name='email' value={formik.values.email} onChange={formik.handleChange}/>
                </div>
                <div className="form-items">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name='password' value={formik.values.password} onChange={formik.handleChange}/>
                </div>
                <div className="form-items">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" id="confirmPassword" name='confirmPassword' value={formik.values.confirmPassword} onChange={formik.handleChange}/>
                </div>
                
                
                <div className="form-items">
                    <button type='submit'>get an account</button>
                </div>
                {/* <p className="form-text">
                    already have an account? <Link to="/signin">sign in</Link>
                </p> */}
                <p className="errMsg">
                    {error&&error}
                </p>
                
            </form>
        </section>
    )
}
export default Employee;