import './Header.css'
import {Link} from'react-router-dom'

const Header = () => {
    return(
        <section className="header">
            <h1>top shelf wine & spirit</h1>
            <div className="cta">
                <Link to={"/signup"}>sign up</Link>
                <Link to={"/signin"}>sign in</Link>
                <Link to={"/new"}>new employee</Link>
            </div>
        </section>
    )
}
export default Header;