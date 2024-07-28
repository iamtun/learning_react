import { Button, Card } from "antd";

import styles from "./Product.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../../reducer/product";

const Product = ({ product }) => {
  const products = useSelector((state) => state.product.productInCards);
  const dispatch = useDispatch();

  return (
    <Card title={product.title} className={styles.container}>
      <img src={product.image} />
      <p className={styles.price}>${product.price}</p>
      <p className={styles.description}>{product.short_description}</p>

      {product.is_sale ? <div className={styles.sale}>SALE</div> : null}

      <Button
        className={styles.btn}
        onClick={() => dispatch(addProduct(product))}
        disabled={products.some((prod) => prod.id === product.id)}
        type="primary"
      >
        Add to card
      </Button>
    </Card>
  );
};

export default Product;
