import { Button, Card } from "react-bootstrap";
import { removeCart } from "./CartSlice";
import { useDispatch } from "react-redux";


export function CartItems({product}) {
    let dispatch=useDispatch()
    return (
        <>
            <Card key={product.id} style={{ width: '18rem',margin:'10px' }}>
                <div className='text-center' style={{margin:'10px'}}>
                <Card.Img variant="top" src={product.image} style={{width:'80px',height:'80px'}} />
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        {product.price}$
                    </Card.Text>
                    <Button variant="primary" onClick={()=>dispatch(removeCart(product))}>Remove</Button>
                </Card.Body>
                </div>
            </Card>
        </>
    );
}