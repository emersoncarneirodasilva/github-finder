import { FaSpinner } from "react-icons/fa";
import styles from "./Loader.module.css";

export default function Loader() {
  return <FaSpinner className={styles.loader} />;
}
