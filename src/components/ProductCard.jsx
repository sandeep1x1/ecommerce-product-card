import React from "react";
import "./ProductCard.css";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import toast from "react-hot-toast";

/**
 * ProductCard Component
 * Props:
 *   - product: { id, title, imageUrl, description, price, isAvailable }
 */
const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  // Add to Cart handler with in-page notification
  const handleAddToCart = () => {
    const cartProduct = { ...product, image: product.imageUrl };
    dispatch(addCart(cartProduct));
    toast.success(`Added '${product.title}' to cart!`);
  };

  return (
    <div className="product-card">
      <img
        src={product.imageUrl}
        alt={product.title}
        className="product-card__image"
      />
      <h2 className="product-card__title">{product.title}</h2>
      <p className="product-card__price">${product.price}</p>
      {product.description && (
        <p className="product-card__description">{product.description}</p>
      )}
      <div style={{ flexGrow: 1 }} />
      {product.isAvailable ? (
        <button
          className="product-card__add-to-cart"
          aria-label={`Add ${product.title} to cart`}
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      ) : (
        <button
          className="product-card__add-to-cart"
          style={{ background: "#aaa", cursor: "not-allowed" }}
          disabled
        >
          Out of Stock
        </button>
      )}
    </div>
  );
};

export default ProductCard;
