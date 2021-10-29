import { useEffect, useState } from "react";
import { getMenu } from "./api/menuApi";
import styles from './Home.module.scss';
import { MenuItem } from "./types";

function menuItem(item: MenuItem) {
  return (
    <div key={item.id} className={styles.card}>
     <h3>{item.name}</h3>
     <p>{item.description}</p>
     <p>${item.price}</p>
   </div>
  );
}

export function Home() {
  const [menu, setMenu] = useState<MenuItem[]>([]);

  useEffect(() => {
    async function fetchMenu() {
      const _menu = await getMenu()
      setMenu(_menu);
    }
    fetchMenu();
  }, []);

  return (
    <>
      <h1>Menu</h1>
      <div>
        {menu.map(menuItem)}
      </div>
    </>
  );
}
