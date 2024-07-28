import { useSelector } from "react-redux";
import styles from "./Card.module.css";
import { ProductInCard } from "@/components/ui";
import { Button, notification } from "antd";
import { useNavigate } from "react-router-dom";

const CardPage = () => {
  const navigate = useNavigate();
  const products = useSelector((state) => state.product.productInCards);

  const total = products.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price * currentValue.quantity;
  }, 0);

  return (
    <main className={styles.container}>
      <h1>Total Card Amount: ${total}</h1>

      <div className={styles.orders}>
        {products.map((prod) => (
          <ProductInCard key={prod.id} product={prod} />
        ))}
      </div>

      <div className={styles.actions}>
        <Button
          type="primary"
          onClick={() => notification.info({ message: "Comming soon" })}
        >
          Checkout
        </Button>
        <Button onClick={() => navigate("/products")}>Continue Shopping</Button>
      </div>
    </main>
  );
};

export default CardPage;
