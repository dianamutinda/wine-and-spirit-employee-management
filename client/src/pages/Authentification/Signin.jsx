import {useFormik} from 'formik'
import {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const apiurl = import.meta.env.VITE_API_URL_ROOT;

const Signin = () =>{
    const [error, setError] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async(formState) =>{
        try {
            const response = await fetch(`${apiurl}/api/users/login`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(formState),
            })
            const data = await response.json()
            if(data.success === true){
                navigate("/admin/approve")
            }else{
                setError(response.message)
            }

            
        } catch (error) {
            setError()
        }
    }



    const formik = useFormik({
        initialValues: {
            username:"",
            password:""
        },
        onSubmit: handleSubmit
        }

    )
    // console.log(formik.values);

    return(
        <section>
            <h1>Signin</h1>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-items">
                    <label htmlFor="username">username</label>
                    <input type="text" id="username" name="username" value={formik.values.username} onChange={formik.handleChange} />
                </div>
                <div className="form-items">
                    <label htmlFor="password">password</label>
                    <input type="password" id="password" name="password" value={formik.values.password} onChange={formik.handleChange}  />
                </div>
                <div className="form-items">
                    <button type="submit">Signin</button>
                </div>
                <p className="form-text">
                    don't have an account <Link to="/signup">sign up</Link>
                </p>
                <p className="errMsg">
                    {error&&error}
                </p>
            </form>
        </section>
    )
}
export default Signin;


