import Card from "../components/Card";
import { AiFillShopping } from "react-icons/ai";
import {FaTshirt} from "react-icons/fa"
import {GiArmoredPants} from "react-icons/gi"
import {GiMonclerJacket} from "react-icons/gi"
import shirt from "../assets/shirt.jpg"
import jeans from "../assets/jeans.jpg"
import sweater from "../assets/sweater.jpg"
import {v4 as uuid} from "uuid";

function Products(){
    const products = [
            {name:"jeans", price:40, icon:<GiArmoredPants /> , imglink:jeans},
            {name:"shirt", price:60, icon:<FaTshirt />, imglink:shirt},
            {name:"sweater", price:90, icon:<GiMonclerJacket />, imglink:sweater},

    ]
    return(
        <div className="container">
            <main className="grid">
            {products.map((product) => 
            <article key={uuid()}>
            <Card name={product.name} price={product.price} icon={product.icon} imglink={product.imglink}/>
            </article>
            )}
            </main>
        </div>
    );
}

export default Products;