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
      <h1 style={{color: brandColor, paddingBottom: 16}}>Entree</h1>
      <div>
        {menu.map(menuItem)}
      </div>
    </>
  );
}
