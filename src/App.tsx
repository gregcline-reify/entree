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

export function App() {
  return (
    <>
      <h1 style={{color: brandColor, paddingBottom: 16}}>Entree</h1>
      <ul>
        {menu.map((item) => {
        return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </>
  );
}
