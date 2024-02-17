import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { addToCart } from './CartSlice';

export function ProductCard({product}) {
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
                    <Button variant="primary" onClick={()=>dispatch(addToCart(product))}>Add to Cart</Button>
                </Card.Body>
                </div>
            </Card>
        </>
    );
}