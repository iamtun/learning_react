import { Category } from "@/components/ui";
import styles from "./Product.module.css";

import data from "@/data/app.json";
const ProductPage = () => {
  return (
    <main className={styles.container}>
      {data.categories.map((category, idx) => {
        return <Category key={idx} category={category} />;
      })}
    </main>
  );
};

export default ProductPage;
