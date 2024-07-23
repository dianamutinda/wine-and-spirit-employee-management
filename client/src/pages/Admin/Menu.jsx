import { Link } from "react-router-dom";
import "./Admin.css"
const Menu = () => {
    return (
        <section>
            <div className="menu-items">
                <div className="menu-item">
                <Link to={"/admin/approve"} className="item">approve accounts</Link>
                </div>
                <div className="menu-item">
                    <Link to={"/admin/employees"} className="item">all employees</Link>
                </div>
                <div className="menu-item">
                    <Link to={"/admin/sales"} className="item">check all sales</Link>
                </div>
                <div className="menu-item">
                    <Link to={"/admin/add"} className="item">add items to menu</Link>
                </div>
                <div className="cta">
                <Link to={"/"}>sign out</Link>
            </div>
            </div>
        </section>
    )
}
export default Menu;