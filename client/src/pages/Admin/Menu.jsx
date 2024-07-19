import { Link } from "react-router-dom";
const Menu = () => {
    return (
        <section>
            <div className="meni-items">
                <div className="menu-item">
                <Link to={"/admin/approve"}>approve accounts</Link>
                </div>
                <div className="menu-item">
                    <Link to={"/admin/employees"}>all employees</Link>
                </div>
                <div className="menu-item">
                    <Link to={"/admin/sales"}>check all sales</Link>
                </div>
                <div className="menu-item">
                    <Link to={"/admin/add"}>add items to menu</Link>
                </div>
            </div>
        </section>
    )
}
export default Menu;