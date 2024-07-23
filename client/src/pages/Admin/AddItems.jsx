import "./Admin.css"
import Menu from "./Menu"
import { useFormik } from 'formik';
import { useState } from "react";
import axios from 'axios'
const AddItems = () =>{
    const [items, setItems] = useState({})
    const [error, setError] = useState()

    const formik = useFormik({
        initialValues:{
            itemname:"",
            price:"",
            description:""
        },
        onSubmit: (formState) =>{
            console.log(formState);
        }
    })

    const [imageInput, setImageInput] = useState()
    const cloudName ="dgfph2jzs"
    const preset ="Top-shelf"

    const handleUpload = async() =>{
        const payload = new FormData()
        payload.append("file", imageInput)
        payload.append("upload_preset", preset)
        console.log(imageInput);
        try {

            
            try {
                const response = await axios.post(`https://api.cloudinary.com/v1_1/${cloudName}/upload`, payload)
            console.log(response.data.secure_url);
            const secure_url = response.data.secure_url
            const imageUrl = secure_url.replace("/upload", "/upload/w_300/f_auto/")
            console.log(imageUrl);
                
            } catch (error) {
                setError(error)
            }
        } catch (error) {
            console.log(error);
        }
    }

    return(
        
        <section className="admin">
            <div className="menu"><Menu/></div>
            <div className="content">
                <form onSubmit={formik.handleSubmit}>
                    <div className="image">
                        <input type="file" name="image" id="image" onChange={(e) => {setImageInput(e.target.files[0])}}/>
                        <button onClick={handleUpload}>upload image</button>
                    </div>
                    <div className="items">
                        <label htmlFor="itemname">item name</label>
                        <input type="text" id="itemname" name="itemname" value={formik.values.itemname} onChange={formik.handleChange} />
                    </div>
                    <div className="items">
                        <label htmlFor="price">item price</label>
                        <input type="text" id="price" name="price" value={formik.values.price} onChange={formik.handleChange} />
                    </div>
                    <div className="items-description">
                        <label htmlFor="description">item description</label>
                        <input type="text" id="description" name="description"  value={formik.values.description} onChange={formik.handleChange} />
                    </div>
                    <div className="sumit">
                        <button type="submit">add item</button>
                    </div>
                </form>
            </div>
        </section>
    )
}
export default AddItems