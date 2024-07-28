import { Button, Card } from "antd";

import styles from "./Product.module.css";

const Product = ({ product }) => {
  return (
    <Card title={product.title} className={styles.container}>
      <img src={product.image} />
      <p className={styles.price}>${product.price}</p>

      <Button className={styles.btn}>Add to card</Button>
    </Card>
  );
};

export default Product;
