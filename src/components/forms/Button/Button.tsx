interface ButtonProps {
  type?: "button" | "submit" | "reset";
  varient: "primary" | "success" | "danger";
  text: string;
  isLoading?: boolean;
}
function Button({
  type = "button",
  varient = "primary",
  text,
  isLoading,
}: ButtonProps) {
  return (
    <button disabled={isLoading} type={type} className={`btn btn-${varient}`}>
      {isLoading ? (
        <span
          className="spinner-border spinner-border-sm"
          role="status"
          aria-hidden="true"
        ></span>
      ) : (
        <span>{text}</span>
      )}
    </button>
  );
}
export default Button;
