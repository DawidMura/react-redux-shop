import { useDispatch, useSelector } from "react-redux";
import { addCoupon } from "../features/cart/cartSlice";
import Button from "@mui/material/Button";

export const PageCart = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);

  const formatPrice = (price) => {
    return new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(price);
  };

  return (
    <div className="page_cart">
      <h2>Shopping Cart</h2>
      <p>Number of books: {items.length}</p>
      <div>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => dispatch(addCoupon())}
        >
          Add Coupon
        </Button>
      </div>
      <ul>
        {items.map((item, index) => {
          return (
            <li key={index}>
              {item.title}-{formatPrice(item.price)} - (discount Price:
              {formatPrice(item.discountedPrice)})
            </li>
          );
        })}
      </ul>
    </div>
  );
};
