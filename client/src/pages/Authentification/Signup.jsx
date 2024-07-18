

const Signup = () =>{
    return(
        <section>
            <h1>Signup</h1>
            <form>
                <div className="form-items">
                    <label htmlFor="username">Username</label>
                    <input type="text" placeholder="Username" />
                </div>
                <div className="form-items">
                    <label htmlFor="firstname">first name</label>
                    <input type="text" placeholder="first name" />
                </div>
                <div className="form-items">
                    <label htmlFor="lastname">last name</label>
                    <input type="text" placeholder="last name" />   
                </div>
                <div className="form-items">
                    <label htmlFor="email">Email</label> 
                    <input type="email" placeholder="Email" />
                </div>
                <div className="form-items">
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Password" />
                </div>
                <div className="form-items">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" placeholder="Confirm Password" />
                </div>
                
                
                <div className="form-items">
                    <button>sign up</button>
                </div>
                
            </form>
        </section>
    )
}
export default Signup;