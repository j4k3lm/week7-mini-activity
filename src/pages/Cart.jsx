import { useCart } from "../context/CartContext";

function Cart() {
    const { cart, clearCart } = useCart();

    return (
        <div>
            <h1>Cart</h1>

            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    {cart.map((product, index) => (
                        <div key={`${product.id}-${index}`}>
                            <p>
                                {product.name} - ₱{product.price}
                            </p>
                        </div>
                    ))}

                    <p>Total Items: {cart.length}</p>

                    <button onClick={clearCart}>
                        Clear Cart
                    </button>
                </>
            )}
        </div>
    );
}

export default Cart;