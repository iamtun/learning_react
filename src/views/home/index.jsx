import { Button } from "antd";
import styles from "./Home.module.css";

import data from "@/data/app.json";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <section className={styles.wrapper}>
      <div className={styles.bg} />
      <div className={styles.container}>
        <div className={styles.left}>
          <h1>{`Welcome to ${data.home.company_name}`}</h1>

          <hr className={styles.divider} />
          <h2>{data.home.description}</h2>

          <Button
            size="large"
            className={styles.btn}
            onClick={() => navigate("/products")}
          >
            Get Started
          </Button>
        </div>

        <p className={styles.right}>{data.home.content}</p>
      </div>
    </section>
  );
};

export default HomePage;
