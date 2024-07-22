import "./Admin.css"
import Menu from "./Menu"
import { useFormik } from 'formik';
const AddItems = () =>{

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

    return(
        
        <section className="admin">
            <Menu/>
            <div className="content">
                <form onSubmit={formik.handleSubmit}>
                    <div className="items">
                        <label htmlFor="itemname">item name</label>
                        <input type="text" id="itemname" name="itemname" value={formik.values.itemname} onChange={formik.handleChange} />
                    </div>
                    <div className="items">
                        <label htmlFor="price">item price</label>
                        <input type="text" id="price" name="price" value={formik.values.price} onChange={formik.handleChange} />
                    </div>
                    <div className="items">
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