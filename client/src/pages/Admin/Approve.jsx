import "./Admin.css"
import Menu from "./Menu"
import { useState, useEffect } from "react"
const apiurl = import.meta.env.VITE_API_URL_ROOT;
const Approve = () =>{
    
    const [error, setError] = useState(false)
    const [requests, setRequests] = useState([])

    const fetchRequest = async() =>{
        const response = await fetch(`${apiurl}/api/users/unapproved`,{
            credentials:"include"
        }
        )
        const data = await response.json()
        console.log(data);
        if(data.success === true){
            setRequests(data.data)
        }else{
            setError(error)
        }
    }
    useEffect(() => {
        fetchRequest()
        }, [])
    

    return(
        
        <section className="admin">
            <Menu/>
            <div className="content">
                <h1>Approve new employees</h1>
                {
                    requests.map((request, i) =>(
                        <div className="card-container">
                    <div className="card" key={i}>
                        <h2><span className="subtittle">name:</span> {request.firstname} {request.lastname}</h2>
                        <h3><span className="subtittle">username:</span>{request.username}</h3>
                        <h3><span className="subtittle">email address:</span>{request.email}</h3>
                        <button className="accept" >accept</button>
                        <button className="reject">reject</button>
                    </div>
                </div>
                    ))
                }
            </div>
        </section>
    )
}
export default Approve