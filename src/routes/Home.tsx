import { useState } from "react";
import { UserProps } from "../types/user";
import Search from "../components/Search";
import User from "../components/User";
import Error from "../components/Error";
import Loader from "../components/Loader";

export default function Home() {
  const [user, setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function loadUser(userName: string) {
    setError(false);
    setUser(null);
    setIsLoading(true);

    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();

    // OBS: Espera os dados carregarem
    setIsLoading(false);

    const { avatar_url, login, location, followers, following } = data;

    if (res.status === 404) {
      setError(true);
      return;
    }

    const userData: UserProps = {
      avatar_url,
      login,
      location,
      followers,
      following,
    };

    setUser(userData);
  }

  return (
    <div>
      <Search loadUser={loadUser} />
      {isLoading && <Loader />}
      {user && <User {...user} />}
      {error && <Error />}
    </div>
  );
}
