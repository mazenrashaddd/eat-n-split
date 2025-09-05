const Input = ({
  label,
  name,
  type,
  placeholder,
  options,
  value,
  onChange,
}) => {
  return (
    <label
      htmlFor={name}
      style={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        gap: "20px",
        justifyContent: "space-between",
      }}
    >
      {label}
      {type === "select" ? (
        <select
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          style={{ width: "100%" }}
        >
          {options.map((option) => {
            return (
              <option key={option.value} value={option.value}>
                {option.name}
              </option>
            );
          })}
        </select>
      ) : (
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={name === "friend's expense"}
        />
      )}
    </label>
  );
};

export default Input;
