import {useContext} from "react";
import CartContext from "../CartContext";
import {v4 as uuid} from "uuid";
import CheckoutCard from "../components/CheckoutCard";

function Checkout(){
    const {items} = useContext(CartContext);

    return (
        <>
            <h1>Checkout</h1>
            <div className="container">
            <main className="checkout-grid">
            {items.map((product) => 
            <article key={uuid()}>
            <CheckoutCard name={product.name} price={product.price} icon={product.icon} imglink={product.imglink}/>
            </article>
            )}
            </main>
            </div>
            
        </>
    );
}

export default Checkout;