import { useSelector } from "react-redux";
import { CartItems } from "./CartItems";

function CartDetails(){
    const cartDetails=useSelector((store)=>store.Carts.cartItems)
    console.log(cartDetails)
    return(
        <>
        {cartDetails.map((cartItems)=><CartItems product={cartItems}></CartItems>)}
        </>
    )
}
export default CartDetails