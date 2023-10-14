import style from "@/styles/components2/button/Button.module.css";

function Button({ children, click }) {
  return (
    <button className={style.btnColor} onClick={click} type="button">
      {children}
    </button>
  );
}
export default Button;
