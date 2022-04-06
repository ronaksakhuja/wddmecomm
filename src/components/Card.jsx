import { AiFillShopping } from "react-icons/ai";
import CartContext from "../CartContext";
import { useContext } from "react";

function Card({name, price,icon}){
    const {addToCart} = useContext(CartContext);

    return(
    <div className="card">
        <div className="product-box">
            {icon}
        </div>
        <div className="purchase">
            <h3>{name}</h3>
            <button onClick={()=> addToCart(name,price)}>
                <AiFillShopping />
            </button>
        </div>
        <h4>{price}</h4>
    </div>
    );
}

export default Card;