import Product from "../product";

import styles from "./Category.module.css";

const Category = ({ category }) => {
  return (
    <section className={styles.container}>
      <h3>{category.name}</h3>

      <div className={styles.products}>
        {category.plants.map((plant) => (
          <Product key={plant.id} product={plant} />
        ))}
      </div>
    </section>
  );
};

export default Category;
