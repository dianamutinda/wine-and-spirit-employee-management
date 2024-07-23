import "./Admin.css";
import Menu from "./Menu";
import { useFormik } from "formik";
import { useState } from "react";
import axios from "axios";
const apiurl = import.meta.env.VITE_API_URL_ROOT;
const AddItems = () => {
  const [items, setItems] = useState({});
  const [error, setError] = useState();
  const [imageInput, setImageInput] = useState();
  const [message, setMessage] = useState()
  const cloudName = "dgfph2jzs";
  const preset = "Top-shelf";

  const handleSubmit = async (values) => {
    const payload = new FormData();
    payload.append("file", imageInput);
    payload.append("upload_preset", preset);
    // console.log(imageInput);
    try {
      try {
        const response = await axios.post(
          `https://api.cloudinary.com/v1_1/${cloudName}/upload`,
          payload
        );
        console.log(response.data.secure_url);
        const secure_url = response.data.secure_url;
        const imageurl = secure_url.replace("/upload", "/upload/w_300/f_auto/");
        // console.log(imageurl);
        setItems({
          itemname: values.itemname,
          price: values.price,
          description: values.description,
          imageurl: imageurl,
        });
      } catch (error) {
        setError(error);
      }
    //   console.log(items);
      const response = await fetch(`${apiurl}/api/items`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(items),
        credentials: "include",
      });
      const data = await response.json();
      if(data.success === true){
        setMessage("Created successully")
        setError(false)
      }else{
        setError("please try again there was an error")
      }
    } catch (error) {
      console.log(error);
    }
  };
  const formik = useFormik({
    initialValues: {
      itemname: "",
      price: "",
      description: "",
      imageurl: "",
    },
    onSubmit: handleSubmit,
  });

  return (
    <section className="admin">
      <div className="menu">
        <Menu />
      </div>
      <div className="content">
        <h3>{message}</h3>
        <form onSubmit={formik.handleSubmit} className="add-form">
          <div className="items">
            <input
              type="file"
              name="image"
              id="image"
              onChange={(e) => {
                setImageInput(e.target.files[0]);
              }}
            />
          </div>
          <div className="items">
            <label htmlFor="itemname">item name</label>
            <input
              type="text"
              id="itemname"
              name="itemname"
              value={formik.values.itemname}
              onChange={formik.handleChange}
            />
          </div>
          <div className="items">
            <label htmlFor="price">item price</label>
            <input
              type="number"
              id="price"
              name="price"
              value={formik.values.price}
              onChange={formik.handleChange}
            />
          </div>
          <div className="items-description">
            <label htmlFor="description">item description</label>
            <input
              type="text"
              id="description"
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
            />
          </div>
          <div className="submit">
            <button type="submit">add item</button>
          </div>
          {error && <p className="error-message">Error: {error}</p>}
        </form>
      </div>
    </section>
  );
};
export default AddItems;
