import { Button, Card } from "antd";
import styles from "./ProdInCard.module.css";
import { useDispatch } from "react-redux";
import { handleQuantity, removeProduct } from "@/reducer/product";

const ProductInCard = ({ product }) => {
  const total = product.price * product.quantity;
  const dispatch = useDispatch();

  return (
    <Card className={styles.container}>
      <img src={product.image} alt={product.title} width={200} height={200} />

      <div className={styles.prod_detail}>
        <p className={styles.prod_name}>{product.title}</p>
        <p className={styles.prod_price}>${product.price}</p>

        <div className={styles.actions}>
          <Button
            onClick={() =>
              dispatch(
                handleQuantity({ productId: product.id, type: "subtract" })
              )
            }
          >
            -
          </Button>
          <p className={styles.total}>${total}</p>
          <Button
            onClick={() =>
              dispatch(handleQuantity({ productId: product.id, type: "add" }))
            }
          >
            +
          </Button>
        </div>

        <Button
          type="primary"
          danger
          onClick={() => dispatch(removeProduct(product.id))}
          style={{marginTop: 12}}
        >
          Delete
        </Button>
      </div>
    </Card>
  );
};

export default ProductInCard;
