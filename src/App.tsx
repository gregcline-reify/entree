import { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import { About } from './About';
import { getMenu } from './api/menuApi';
import { Home } from './Home';
import { Input } from './Input';

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

export function App() {
  const [newMenuItem, setNewMenuItem] = useState(initialNewMenuItem);

  function onChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setNewMenuItem({...newMenuItem, [event.target.id]: event.target.value});
  }

  // function onSubmit(event: React.FormEvent<HTMLFormElement>) {
  //   event.preventDefault();
  //   setMenu([...menu, {...newMenuItem, price: newMenuItem.price ?? 0, id: menu.length + 1}]);
  //   setNewMenuItem(initialNewMenuItem);
  // }

  return (
    <>
      <Route path="/" exact>
        <Home />
      </Route>

      <Route path="/about">
        <About />
      </Route>

      <h1>Entree</h1>

      <form>
        <Input id="name" type="text" label="Name" value={newMenuItem.name}
               onChange={onChange} />

        <Input id="description" type="textarea" label="Description"
               value={newMenuItem.description} onChange={onChange} />

        <Input id="price" type="number" label="Price"
               value={newMenuItem.price?.toString() ?? ""} onChange={onChange} />

        <input type="submit" value="Save Menu Item" />
      </form>
    </>
  );
}
