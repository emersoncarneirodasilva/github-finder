import { useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import styles from "./BackBtn.module.css";

export default function BackBtn() {
  const navigate = useNavigate();

  return (
    <button className={styles.back_btn} onClick={() => navigate(-1)}>
      <span>Voltar</span>
      <BsArrowLeft />
    </button>
  );
}
