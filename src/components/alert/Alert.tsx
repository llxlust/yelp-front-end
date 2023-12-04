interface IAlertProps{
    message: string,
    variant: "primary" | "success" | "danger"
}
export default function Alert({message,variant}:IAlertProps) {
  return (
    <div className={`alert alert-${variant}`} role="alert">
      {message}
    </div>
  );
}
