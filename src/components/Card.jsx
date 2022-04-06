import { AiFillShopping } from "react-icons/ai";
import CartContext from "../CartContext";
import { useContext } from "react";

function Card({name, price,icon,imglink}){
    const {addToCart} = useContext(CartContext);

    return(
        <div>
        <img height="250px" src={imglink} alt="Sample photo"/>
        <div className="text">
          <h3>{name} {icon}</h3>
          <p>${price}</p>
          <button onClick={()=>addToCart(name,price,imglink)}><AiFillShopping/> <p className="addcarttext">Add to Cart</p></button>
        </div>
      </div>
    );
}

export default Card;