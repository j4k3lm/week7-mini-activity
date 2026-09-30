import { useCart } from "../context/CartContext";

function Products() {
    const { addToCart } = useCart();

    const products = [
        {
            id: 1,
            name: "Notebook",
            price: 50,
        },
        {
            id: 2,
            name: "Ballpen",
            price: 15,
        },
        {
            id: 3,
            name: "Marker",
            price: 35,
        },
    ];

    return (
        <div>
            <h1>Products</h1>

            {products.map((product) => (
                <div className="product" key={product.id}>
                    <h3>{product.name}</h3>
                    <p>Price: ₱{product.price}</p>

                    <button onClick={() => addToCart(product)}>
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Products;