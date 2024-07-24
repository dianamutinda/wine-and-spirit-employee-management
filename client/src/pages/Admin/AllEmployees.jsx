
import "./Admin.css";
import Menu from "./Menu";
import { useEffect, useState } from "react";

const apiurl = import.meta.env.VITE_API_URL_ROOT;

const AllEmployees = () => {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiurl}/api/users/allusers`, {
          credentials: "include"
        });
        const data = await response.json();
        if (response.ok) {
          setEmployees(data.data);
        } else {
          setError(data.message || 'Failed to fetch employees.');
        }
      } catch (error) {
        setError(error.message || 'Failed to fetch employees.');
      }
    };
    fetchData();
  }, []);

  const rejectEmployee = async (id) => {
    try {
      const response = await fetch(`${apiurl}/api/users/delete/${id}`, {
        method: "DELETE",
        credentials: "include"
      });
      const data = await response.json();
      if (response.ok) {
        setEmployees(employees.filter(employee => employee.id !== id));
      } else {
        setError(data.message || 'Failed to reject employee.');
      }
    } catch (error) {
      setError(error.message || 'Failed to reject employee.');
    }
  };

  return (
    <section className="admin">
      <div className="menu"><Menu /></div>
      <div className="content">
        <h1>All approved employees</h1>
        <div className="card-container">
          {employees.map((employee, index) => (
            <div className="card" key={index}>
              <h2><span className="subtitle">Name:</span> {employee.firstname} {employee.lastname}</h2>
              <h3><span className="subtitle">Username:</span> {employee.username}</h3>
              <h3><span className="subtitle">Email:</span> {employee.email}</h3>
              <button className="reject" onClick={() => rejectEmployee(employee.id)}>delete</button>
            </div>
          ))}
          {error && <p className="error-message">Error: {error}</p>}
        </div>
      </div>
    </section>
  );
};

export default AllEmployees;
