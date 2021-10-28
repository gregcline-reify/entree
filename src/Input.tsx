type InputProps = {
  id: string;
  label: string;
  type?: "text" | "email" | "number" | "date" | "textarea";
};

export function Input(props: InputProps) {
  const {id, label, type = "text"} = props;
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <br/>
      { type === "textarea"
        ? <textarea id={id} />
        : <input type={type} id={id} /> }
    </div>
  );
}
