import { useState } from "react";
import { Input } from "./Input";

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

export function Admin() {
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
      <h1>Admin</h1>

      <h2>Add Menu Item</h2>
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
