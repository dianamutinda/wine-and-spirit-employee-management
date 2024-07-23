import "./Admin.css"
import Menu from "./Menu"
const Sales = () =>{
    

    return(
        
        <section className="admin">
            <div className="menu"><Menu/></div>
            <div className="content">
          
    <h1>Item Table</h1>

    <table>
        <thead>
            <tr>
                <th>item no</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Item A</td>
                <td>$10</td>
                <td>3</td>
                <td>$30</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Item B</td>
                <td>$15</td>
                <td>2</td>
                <td>$30</td>
            </tr>
        
        </tbody>
        <tfoot>
            <tr>
                <td colspan="4" >Total:</td>
                <td>$60</td>
            </tr>
        </tfoot>
    </table>


            </div>
        </section>
    )
}
export default Sales