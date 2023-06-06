import { RepoProps } from "../types/repository";
import Repository from "../components/Repository";
import BackBtn from "../components/BackBtn";
import Loader from "../components/Loader";
import styles from "./Repositories.module.css";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Repositories() {
  const { username } = useParams();

  const [repos, setRepos] = useState<RepoProps[] | [] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function loadRepository(username: string) {
      setIsLoading(true);

      const res = await fetch(`https://api.github.com/users/${username}/repos`);
      const data = await res.json();

      setIsLoading(false);

      let orderedRepositories = data.sort(
        (a: RepoProps, b: RepoProps) => b.stargazers_count - a.stargazers_count
      );

      orderedRepositories = orderedRepositories.slice(0, 5);

      setRepos(orderedRepositories);
    }

    if (username) {
      loadRepository(username);
    }
  }, [username]);

  if (!repos && isLoading) {
    return <Loader />;
  }

  return (
    <div className={styles.repositories}>
      <BackBtn />
      <h2>Explore os repositórios do usuário: {username}</h2>
      {repos && repos.length === 0 && <p>Não há repositórios.</p>}
      {repos && repos.length > 0 && (
        <div className={styles.repositories_container}>
          {repos.map((repo: RepoProps) => (
            <Repository key={repo.name} {...repo} />
          ))}
        </div>
      )}
    </div>
  );
}
