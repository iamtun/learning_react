import { Button, Card } from "antd";

import styles from "./Product.module.css";

const Product = ({ product }) => {
  return (
    <Card title={product.title} className={styles.container}>
      <img src={product.image} />
      <p className={styles.price}>${product.price}</p>
      <p className={styles.description}>{product.short_description}</p>

      {product.is_sale ? <div className={styles.sale}>SALE</div> : null}

      <Button className={styles.btn}>Add to card</Button>
    </Card>
  );
};

export default Product;
