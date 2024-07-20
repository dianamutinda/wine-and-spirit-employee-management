import "./Admin.css"
import Menu from "./Menu"
import useEmployeesStore from "../../Store/EmployeesStore"

const Approve = () =>{
    const captureEmployee = useEmployeesStore((state) => state.captureEmployee)
    const employees = useEmployeesStore((state) => state.employees)
 
    const unapprovedEmployees = [
        {
            name: "Diana",
            userName: "diana123",
            email: "diana@gmail.com"
        },
        {
            name: "Diana",
            userName: "diana123",
            email: "diana@gmail.com"
        },
        {
            name: "Diana",
            userName: "diana123",
            email: "diana@gmail.com"
        },
        {
            name: "Diana",
            userName: "diana123",
            email: "diana@gmail.com"
        }
    ]

    const handleApprove = (employee) => {
        // console.log(employee)
        captureEmployee(employee)
        console.log(employees)
    }

    return(
        
        <section className="admin">
            <Menu/>
            <div className="content">
                <h1>Approve new employees</h1>
                {
                    unapprovedEmployees.map((employee, i) =>(
                        <div className="card-container">
                    <div className="card" key={i}>
                        <h2><span className="subtittle">name:</span> {employee.name}</h2>
                        <h3><span className="subtittle">username:</span>{employee.userName}</h3>
                        <h3><span className="subtittle">email address:</span>{employee.email}</h3>
                        <button className="accept" onClick={()=> handleApprove(employee)}>accept</button>
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