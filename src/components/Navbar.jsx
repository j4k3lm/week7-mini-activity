import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
    const { cart } = useCart();

    return (
        <nav>
            <h2>My Shop</h2>

            <div>
                <Link to="/products">Products</Link>
                {" | "}
                <Link to="/cart">Cart ({cart.length})</Link>
            </div>
        </nav>
    );
}

export default Navbar;