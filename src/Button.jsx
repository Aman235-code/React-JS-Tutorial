import styles from "./Button.module.css";

function Button() {
  let count = 0;
  const handleClick = (name) => {
    console.log("object");
    if (count < 3) {
      count++;
      console.log(`${name} clicked ${count} times`);
    } else {
      console.log(`${name} stop`);
    }
  };

  const handleClick3 = (e) => {
    e.target.textContent = "OUCH";
  };

  const handleClick2 = (name) => {
    console.log(`${name} hello`);
  };
  const styles = {
    backgroundColor: "hsl(200, 100%, 50%)",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  };
  //   return <button className={styles.button}>Click Me</button>;
  return (
    <button style={styles} onDoubleClick={(e) => handleClick3(e)}>
      Click Me
    </button>
  );
}

export default Button;
