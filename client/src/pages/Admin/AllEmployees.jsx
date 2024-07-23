import "./Admin.css"
import Menu from "./Menu"
import { useEffect, useState } from "react"
// import { useNavigate } from "react-router-dom";
const apiurl = import.meta.env.VITE_API_URL_ROOT;

const AllEmployees = () =>{

    const [employees, setEmployees] = useState([])
    const [error, setError] = useState(false)
    // const navigate = useNavigate()


    useEffect(() => {
        const fetchData = async() =>{
            try {
                const response = await fetch(`${apiurl}/api/users/allusers`, {
                    credentials:"include"
                });
                console.log(response);
                const data = await response.json()
                console.log(data);
                if (data.success) {
                    setEmployees(data.data);
                    // navigate("/");
                  } else {
                    setError('Invalid email or password');
                  }
    
            } catch (error) {
                setError(error)
            }
        }
        fetchData()
    }, [])

    return(
        
        <section className="admin">
            <div className="menu"><Menu/></div>
            <div className="content">
                <h1>All employees</h1>
                {
                    employees.map((employee, i) =>(
                        <div className="card-container">
                    <div className="card" key={i}>
                        <h2><span className="subtittle">name:</span> {employee.firstname} {employee.lastname}</h2>
                        <h3><span className="subtittle">username:</span>{employee.username}</h3>
                        <h3><span className="subtittle">email address:</span>{employee.email}</h3>
                        <button className="reject">delete</button>
                    </div>
                </div>
                    ))
                }
                {error && <p className="errMsg">{error}</p>}
            </div>
        </section>
    )
}
export default AllEmployees