import {Link} from "react-router-dom";
import { AiFillShopping } from "react-icons/ai";
import CartContext from "../CartContext";
import { useContext } from "react";

function Nav() {

    const {items} = useContext(CartContext);

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/" className="nav-link">Products</Link>
                </li>

                <li>
                    <Link to="/checkout" className="nav-link">
                        <div className="cart">
                            <AiFillShopping />
                            <span>{items.length}</span>
                        </div>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;