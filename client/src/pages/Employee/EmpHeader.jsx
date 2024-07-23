import { Link } from "react-router-dom";
const EmpHeader = () => {
  return (
    <section>
      <div className="cta-items">
        <div className="cta">
          <Link to={"/employee/sales"}>employee sales</Link>
        </div>
        <div className="cta">
          <Link to={"/employee/items"}>menu items</Link>
        </div>
        <div className="cta">
          <Link to={"/"}>sign out</Link>
        </div>
      </div>
    </section>
  );
};
export default EmpHeader;
