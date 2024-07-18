import {useFormik} from 'formik'

const Signin = () =>{
    const formik = useFormik({
        initialValues: {
            username:"",
            password:""
        },
        onSubmit: (formState) => {
            console.log(formState)
        }

    })
    console.log(formik.values);

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
            </form>
        </section>
    )
}
export default Signin;


