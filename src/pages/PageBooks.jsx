import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../features/cart/cartSlice";
import Button from "@mui/material/Button";
import "./PageBooks.scss";

export const PageBooks = () => {
  const dispatch = useDispatch();
  const { customerName } = useSelector((state) => state.cart);

  return (
    <div className="page_books">
      {customerName != "" ? <h2>Books for {customerName}</h2> : <h2>Books</h2>}
      <div className="wrapper">
        <Button
          variant="contained"
          color="error"
          onClick={() => dispatch(removeItem())}
        >
          remove item
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() =>
            dispatch({
              type: "cart/addItem",
              payload: { title: "Node.js Cookbook", price: 23.99 },
            })
          }
        >
          Node.js Cookbook
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() =>
            dispatch({
              type: "cart/addItem",
              payload: { title: "React for beginners", price: 45.99 },
            })
          }
        >
          React for beginners
        </Button>
      </div>
    </div>
  );
};
