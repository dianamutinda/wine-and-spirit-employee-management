const Orders = () =>{
    return(
        <section>
             <h1>Item Table</h1>

<table>
    <thead>
        <tr>
            <th>item no</th>
            <th>Item Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th>order</th>
            <th>cancel</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Item A</td>
            <td>$10</td>
            <td>3</td>
            <td>$30</td>
            <td><button>Order</button></td>
            <td><button>Cancel</button></td>
        </tr>
        
    
    </tbody>
    <tfoot>
        <tr>
            <td colspan="4" >Total:</td>
            <td>$60</td>
        </tr>
    </tfoot>
</table>
        </section>
    )
}
export default Orders;