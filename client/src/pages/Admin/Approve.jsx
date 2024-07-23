// import "./Admin.css"
// import Menu from "./Menu"
// import { useState, useEffect } from "react"
// const apiurl = import.meta.env.VITE_API_URL_ROOT;
// const Approve = () =>{
    
//     const [error, setError] = useState(false)
//     const [requests, setRequests] = useState([])

//     const fetchRequest = async() =>{
//         const response = await fetch(`${apiurl}/api/users/unapproved`,{
//             credentials:"include"
//         }
//         )
//         const data = await response.json()
//         console.log(data);
//         if(data.success === true){
//             setRequests(data.data)
//         }else{
//             setError(error)
//         }
//     }
//     useEffect(() => {
//         fetchRequest()
//         }, [])
    
// const apdateEmployee = async(id) =>{
//     try {
//         const response = await fetch(`${apiurl}/api/users/unapproved/${id}`,{
//             method:"PATCH",
//             credentials:"include"
//         })
//         const data = await response.json()
//         if(data.success === true){
//             setRequests(data.data.message)
//             }else{
//                 setError(error)
//                 }
//     } catch (error) {
//         setError(error)
//     }
// }        

//     return(
        
//         <section className="admin">
//             <Menu/>
//             <div className="content">
//                 <h1>Approve new employees</h1>
//                 {
//                     requests.map((request, i) =>(
//                         <div className="card-container">
//                     <div className="card" key={i}>
//                         <h2><span className="subtittle">name:</span> {request.firstname} {request.lastname}</h2>
//                         <h3><span className="subtittle">username:</span>{request.username}</h3>
//                         <h3><span className="subtittle">email address:</span>{request.email}</h3>
//                         <button className="accept" onClick={updateEmployee}>accept</button>
//                         <button className="reject">reject</button>
//                     </div>
//                 </div>
//                     ))
//                 }
//             </div>
//         </section>
//     )
// }
// export default Approve

import { useState, useEffect } from "react";
import "./Admin.css";
import Menu from "./Menu";

const Approve = () => {
    const [error, setError] = useState(null);
    const [requests, setRequests] = useState([]);

    const apiurl = import.meta.env.VITE_API_URL_ROOT;

    useEffect(() => {
        fetchRequests();
    }, []);

    const fetchRequests = async () => {
        try {
            const response = await fetch(`${apiurl}/api/users/unapproved`, {
                credentials: "include"
            });
            const data = await response.json();
            if (data.success) {
                setRequests(data.data);
            } else {
                setError(data.message);
            }
        } catch (error) {
            setError(error.message);
        }
    };

    const updateEmployee = async (id) => {
        try {
            const response = await fetch(`${apiurl}/api/users/approve/${id}`, {
                method: "PATCH",
                credentials: "include"
            });
            console.log(response);
            const data = await response.json();
            console.log(data);
            if (data.success) {
                setRequests(requests.filter(request => request.id !== id))
                
            } else {
                setError(data.message);
            }
        } catch (error) {
            setError(error.message);
        }
    };

    const rejectEmployee = async (id) => {
        try {
            const response = await fetch(`${apiurl}/api/users/reject/${id}`, {
                method: "DELETE",
                credentials: "include"
            });
            console.log(response);
            const data = await response.json();
            console.log(data);
            if (data.success === true) {
                setRequests(requests.filter(request => request.id !== id))
               
            } else {
                setError(error);
            }
        } catch (error) {
            setError(error);
        }
    };

    return (
        <section className="admin">
            <div className="menu"><Menu/></div>
            <div className="content">
                <h1>Approve new employees</h1>
                <div className="content-items">
                {requests.map((request, index) => (
                    <RequestCard
                        key={index}
                        request={request}
                        updateEmployee={() => updateEmployee(request.id)}
                        rejectEmployee={() => rejectEmployee(request.id)}
                    />
                ))}
                {error && <p className="error-message">Error: {error}</p>}
                </div>
            </div>
        </section>
    );
};

const RequestCard = ({ request, updateEmployee, rejectEmployee }) => {
    return (
        <div className="card-container">
            <div className="card">
                <h2><span className="subtittle">Name:</span> {request.firstname} {request.lastname}</h2>
                <h3><span className="subtittle">Username:</span> {request.username}</h3>
                <h3><span className="subtittle">Email Address:</span> {request.email}</h3>
                <button className="accept" onClick={updateEmployee}>Accept</button>
                <button className="reject" onClick={rejectEmployee}>Reject</button>
            </div>
        </div>
    );
};

export default Approve;
