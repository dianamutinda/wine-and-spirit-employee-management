import {useFormik} from 'formik'

const Signup = () =>{
    const formik = useFormik({
        initialValues: {
            username:'',
            firstname:'',
            lastname:'',
            email: '',
            password: '',
            confirmPassword: ''
            },
            onSubmit: (formState) => {
                console.log(formState);
            }
    })
    return(
        <section>
            <h1>Signup</h1>
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
                    <button type='submit'>sign up</button>
                </div>
                
            </form>
        </section>
    )
}
export default Signup;