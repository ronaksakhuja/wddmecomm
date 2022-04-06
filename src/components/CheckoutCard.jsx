import { AiFillShopping } from "react-icons/ai";


function CheckoutCard({name, price,icon,imglink}){

    return(
        <div>
        <img src={imglink} alt="Sample photo"/>
        <div className="text">
          <h3>{name} {icon}</h3>
          <p>${price}</p>
        </div>
      </div>
    );
}

export default CheckoutCard;