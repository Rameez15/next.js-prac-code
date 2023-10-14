import Item from "../items/Item";
import styles from "../../styles/components2/list/List.module.css";

function List({ arr }) {
  const itm = arr.map((item, ind) => <Item key={`no ${ind}`} text={item} />);
  return (
    <div className={styles.li}>
      <ol>{itm}</ol>
    </div>
  );
}
export default List;
