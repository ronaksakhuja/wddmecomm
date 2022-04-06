import Card from "../components/Card";
import { AiFillShopping } from "react-icons/ai";
import {AiOutlineUserAdd} from "react-icons/ai"

function Products(){
    const products = [
            {name:"vest", price:40},
            {name:"shirt", price:60}
    ]
    return(
        <div className="product-list">
            {products.map((product) => 
            <Card name={product.name} price={product.price} icon={<AiOutlineUserAdd />} />
            )}
        </div>
    );
}

export default Products;