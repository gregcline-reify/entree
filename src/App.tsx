import styles from './App.module.scss';

const brandColor = 'blue';

type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
};

const menu: MenuItem[] = [
  {
    id: 1,
    name: 'Chicken Tikka Masala',
    description: 'Rich curry chicken',
    price: 17,
  },
  {
    id: 2,
    name: 'BBQ Ribs',
    description: 'Meaty & tender',
    price: 24,
  }
]

function menuItem(item: MenuItem) {
  return (
    <div key={item.id} className={styles.card}>
     <h3>{item.name}</h3>
     <p>{item.description}</p>
     <p>${item.price}</p>
   </div>
  );
}

export function App() {
  return (
    <>
      <h1>Entree</h1>

      <form>
        <div>
          <label htmlFor="name">Name</label>
          <br/>
          <input type="text" id="name" />
        </div>

        <div>
          <label htmlFor="description">Description</label>
          <br/>
          <textarea id="description" />
        </div>

        <div>
          <label htmlFor="price">Price</label>
          <br/>
          <input type="number" id="price" />
        </div>

        <input type="submit" value="Save Menu Item" />
      </form>

      <div>
        {menu.map(menuItem)}
      </div>
    </>
  );
}
