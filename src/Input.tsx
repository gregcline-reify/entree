type InputProps = {
  id: string;
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  type?: "text" | "email" | "number" | "date" | "textarea";
  value: string;
};

export function Input(props: InputProps) {
  const {id, label, onChange, type = "text", value} = props;
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <br/>
      { type === "textarea"
        ? <textarea id={id} value={value} onChange={onChange} />
        : <input type={type} id={id} value={value} onChange={onChange} /> }
    </div>
  );
}
