import { useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Link, Route } from "react-router-dom";
import { About } from "./About";
import { Admin } from "./Admin";
import { getMenu } from "./api/menuApi";
import { Home } from "./Home";
import { LoadingStatus, MenuItem } from "./types";

export function App() {
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const [loadingStatus, setLoadingStatus] = useState<LoadingStatus>("Loading");

  useEffect(() => {
    async function fetchMenu() {
      const _menu = await getMenu();
      setMenu(_menu);
      setLoadingStatus("Loaded");
    }
    fetchMenu();
  }, []);

  return (
    <>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
        <Link to="/admin">Admin</Link>
      </nav>
      <Route path="/" exact>
        <Home menu={menu} loadingStatus={loadingStatus}/>
      </Route>

      <Route path="/about">
        <About />
      </Route>

      <Route path="/admin">
        <ErrorBoundary fallback={<>Sorry, the save failed</>}>
          <Admin menu={menu} />
        </ErrorBoundary>
      </Route>
    </>
  );
}
