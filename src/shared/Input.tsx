type InputProps = {
  id: string;
  /** Validation error to display below the input */
  error: string;
  label: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  type?: "text" | "email" | "number" | "date" | "textarea";
  value: string;
};

export function Input(props: InputProps) {
  const { id, error, label, onChange, type = "text", value } = props;
  if (!id) throw new Error("ID must be populated");
  return (
    <>
      <div>
        <label htmlFor={id}>{label}</label>
        <br />
        {type === "textarea" ? (
          <textarea id={id} value={value} onChange={onChange} />
        ) : (
          <input type={type} id={id} value={value} onChange={onChange} />
        )}
      </div>
      <div style={{color: "red"}}>{error}</div>
    </>
  );
}
