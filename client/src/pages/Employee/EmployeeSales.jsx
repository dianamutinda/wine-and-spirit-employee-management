import { useEffect, useState } from "react";
import './Employee.css'
const apiurl = import.meta.env.VITE_API_URL_ROOT;
const EmpSales = () =>{
    const [items, setItems] = useState([]);
    const[error, setError] = useState();

    useEffect(() => {
        const fetchData = async (userId) => {
          try {
            const response = await fetch(`${apiurl}/api/orders/${userId}`, {
              credentials: "include"
            });
            console.log(response);
            const data = await response.json();
            console.log(data);
            if (response.ok) {
              setItems(data.data);
            } else {
              setError(data.message || 'Failed to fetch employees.');
            }
          } catch (error) {
            setError(error.message || 'Failed to fetch employees.');
          }
        };
        fetchData();
      }, []);
    return(
        <section>
      <h1>menu Items</h1>
      <div className="item-container">
      {
        items.map((item, i) => (
            
        <div className="item" key={i}>
          
          <div className="item-content">
          <div className="image">
          <img src={item.imageurl} alt="" />
          </div>
            <div className="price">
            <h3>name: {item.itemname}</h3>
            <h3>price: ${item.price}</h3>
            </div>
            <p>{item.description}</p>
            <button type="submit">order</button>
          </div>
        </div>
      
        ))
      }
      </div>
      {error && <p className="errMsg">{error}</p>}
    </section>
    )
}
export default EmpSales;