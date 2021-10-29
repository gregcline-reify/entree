import { useState } from "react";
import { addMenuItem } from "./api/menuApi";
import { Input } from "./Input";
import { NewMenuItem } from "./types";
import { useHistory } from "react-router-dom";

const initialNewMenuItem: NewMenuItem = {
  name: "",
  description: "",
  price: null,
}

export function Admin() {
  const history = useHistory()
  const [newMenuItem, setNewMenuItem] = useState(initialNewMenuItem);

  function onChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setNewMenuItem({...newMenuItem, [event.target.id]: event.target.value});
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await addMenuItem(newMenuItem);
    history.push("/");
  }

  return (
    <>
      <h1>Admin</h1>

      <h2>Add Menu Item</h2>
      <form onSubmit={onSubmit}>
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
