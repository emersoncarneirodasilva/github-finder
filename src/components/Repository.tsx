import { RepoProps } from "../types/repository";
import { BsCodeSlash } from "react-icons/bs";
import { AiOutlineStar, AiOutlineFork } from "react-icons/ai";
import { RiGitRepositoryLine } from "react-icons/ri";
import styles from "./Repository.module.css";

export default function Repository({
  name,
  html_url,
  language,
  stargazers_count,
  forks_count,
}: RepoProps) {
  return (
    <div className={styles.repository}>
      <h3>{name}</h3>
      <p>
        <BsCodeSlash /> {language}
      </p>
      <div className={styles.stats}>
        <div>
          <AiOutlineStar />
          <span>{stargazers_count}</span>
        </div>
        <div>
          <AiOutlineFork />
          <span>{forks_count}</span>
        </div>
      </div>
      <a href={html_url} target="_blank" className={styles.repository_btn}>
        <span>Ver código</span>
        <RiGitRepositoryLine />
      </a>
    </div>
  );
}
