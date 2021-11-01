import styles from "./Home.module.scss";
import { LoadingStatus, MenuItem } from "./types";

type HomeProps = {
  menu: MenuItem[];
  loadingStatus: LoadingStatus;
}

function menuItem(item: MenuItem) {
  return (
    <div key={item.id} className={styles.card}>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p>${item.price}</p>
    </div>
  );
}

export function Home({menu, loadingStatus}: HomeProps) {

  return (
    <>
      <h1>Menu</h1>
      {loadingStatus === "Loading" ? (
        <p>Menu loading...</p>
      ) : (
        menu.length + " Items found."
      )}
      <div>{menu.map(menuItem)}</div>
    </>
  );
}
