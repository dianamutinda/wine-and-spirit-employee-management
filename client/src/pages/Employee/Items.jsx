import { useEffect, useState } from "react";
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
      <h1>Items</h1>
      {
        items.map((item, i) => (
            <div className="item-container">
        <div className="item" key={i}>
          <img src={item.imageurl} alt="" />
          <div className="item-content">
            <h3>{item.itemname}</h3>
            <h3>{item.price}</h3>
            <p>{item.description}</p>
            <button type="submit">order</button>
          </div>
        </div>
      </div>
        ))
      }
      {error && <p className="errMsg">{error}</p>}
    </section>
  );
};
export default Items;
