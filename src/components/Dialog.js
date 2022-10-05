export default function Dialog(props) {
  return (
    <div style={{ backgroundColor: props.color }}>
      {typeof props.title === "string" ? <h1>{props.title}</h1> : props.title}
      <p>{props.message}</p>
      {props.children}
    </div>
  );
}
