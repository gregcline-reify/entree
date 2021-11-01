import { useState } from "react";
import { useHistory } from "react-router-dom";
import { addMenuItem } from "./api/menuApi";
import { Input } from "./shared/Input";
import { NewMenuItem } from "./types";

const initialNewMenuItem: NewMenuItem = {
  name: "",
  description: "",
  price: null,
};

type Error = {
  name: string;
  description: string;
  price: string;
};

type Status = "Idle" | "Saving" | "Submitted";

export function Admin() {
  const history = useHistory();
  const [status, setStatus] = useState<Status>("Idle");
  const [newMenuItem, setNewMenuItem] = useState(initialNewMenuItem);

  const errors = validate();
  const invalid = Object.values(errors).some((v) => v);

  function validate(): Error {
    const error: Error = {
      name: "",
      description: "",
      price: "",
    };
    if (!newMenuItem.name) error.name = "Name is required.";
    if (!newMenuItem.description)
      error.description = "Description is required.";
    if (!newMenuItem.price) error.price = "Price is required.";
    if (newMenuItem.price == 0) error.price = "Price must be greater than 0.";
    return error;
  }

  function onChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setNewMenuItem({ ...newMenuItem, [event.target.id]: event.target.value });
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("Submitted");
    if (invalid) return;
    setStatus("Saving");
    await addMenuItem(newMenuItem);
    history.push("/");
  }

  return (
    <>
      <h1>Admin</h1>

      <h2>Add Menu Item</h2>
      <form onSubmit={onSubmit}>
        <Input
          id="name"
          error={status !== "Idle" && errors.name ? errors.name : ""}
          type="text"
          label="Name"
          value={newMenuItem.name}
          onChange={onChange}
        />

        <Input
          id="description"
          error={
            status !== "Idle" && errors.description ? errors.description : ""
          }
          type="textarea"
          label="Description"
          value={newMenuItem.description}
          onChange={onChange}
        />

        <Input
          id="price"
          error={status !== "Idle" && errors.price ? errors.price : ""}
          type="number"
          label="Price"
          value={newMenuItem.price?.toString() ?? ""}
          onChange={onChange}
        />

        <input
          type="submit"
          value="Save Menu Item"
          disabled={status === "Saving"}
        />
      </form>
    </>
  );
}
