import { Logo } from "@/assets";

import styles from "./Header.module.css";
import data from "@/data/app.json";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { Badge } from "antd";

const Header = () => {
  const productCount = 0;
  return (
    <header className={styles.container}>
      <div className={styles.left}>
        <Link to="/">
          <img
            src={Logo}
            alt="logo"
            width={80}
            height={80}
            className={styles.logo}
          />
        </Link>

        <div className={styles.left_content}>
          <h2>{data.home.company_name}</h2>
          <h3>{data.home.description}</h3>
        </div>
      </div>

      <Link to={"/card"}>
        <Badge count={productCount}>
          <FiShoppingCart size={40} color="#fff" />
        </Badge>
      </Link>
    </header>
  );
};

export default Header;
