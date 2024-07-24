import { useEffect, useState } from "react";
import './Employee.css'
const apiurl = import.meta.env.VITE_API_URL_ROOT;

const Items = () => {
    const [items, setItems] = useState([]);
    const[error, setError] = useState();
 
    const fetchItems = async () => {
        try {
        const response = await fetch(`${apiurl}/api/items`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });
        const data = await response.json();
        console.log('data',data);
        setItems(data.data);
      
  } catch (error) {
    setError(error)
  }
  }
  useEffect(() => {
    fetchItems();
    }, []);
    


  return (
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
            <button >order</button>
          </div>
        </div>
      
        ))
      }
      </div>
      {error && <p className="errMsg">{error}</p>}
    </section>
  );
};
export default Items;
