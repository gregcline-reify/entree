import { useEffect, useState } from 'react';
import { getMenu } from './api/menuApi';
import styles from './App.module.scss';
import { Input } from './Input';

type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
};

type NewMenuItem = {
  name: string;
  description: string;
  price: number | null;
};

const initialNewMenuItem: NewMenuItem = {
  name: "",
  description: "",
  price: null,
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

export function App() {
  const [newMenuItem, setNewMenuItem] = useState(initialNewMenuItem);
  const [menu, setMenu] = useState<MenuItem[]>([]);

  useEffect(() => {
    async function fetchMenu() {
      const _menu = await getMenu()
      setMenu(_menu);
    }
    fetchMenu();
  }, []);


  function onChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setNewMenuItem({...newMenuItem, [event.target.id]: event.target.value});
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMenu([...menu, {...newMenuItem, price: newMenuItem.price ?? 0, id: menu.length + 1}]);
    setNewMenuItem(initialNewMenuItem);
  }

  return (
    <>
      <h1>Entree</h1>

      <form onSubmit={onSubmit}>
        <Input id="name" type="text" label="Name" value={newMenuItem.name}
               onChange={onChange} />

        <Input id="description" type="textarea" label="Description"
               value={newMenuItem.description} onChange={onChange} />

        <Input id="price" type="number" label="Price"
               value={newMenuItem.price?.toString() ?? ""} onChange={onChange} />

        <input type="submit" value="Save Menu Item" />
      </form>

      <div>
        {menu.map(menuItem)}
      </div>
    </>
  );
}
