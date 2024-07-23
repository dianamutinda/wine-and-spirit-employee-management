import { Link } from "react-router-dom";
const EmpHeader = () => {
  return (
    <section>
      <div className="cta-items">
        <div className="cta">
          <Link to={"/employee/empprofile"}>employee profile</Link>
        </div>
        <div className="cta">
          <Link to={"/employee/orders"}>orders table</Link>
        </div>
        <div className="cta">
          <Link to={"/employee/empsales"}>employee sales</Link>
        </div>
        <div className="cta">
          <Link to={"/"}>sign out</Link>
        </div>
      </div>
    </section>
  );
};
export default EmpHeader;
