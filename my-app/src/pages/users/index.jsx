import { useState } from "react";
import Link from "next/link";
import Button from "@/components/buttons/Button";
import List from "@/components/list/List";

function Ramz() {
  const btnCaller = () => alert("hello");
  // const textHandler = () => alert("hi");
  let [arr, setData] = useState([
    "hi thi is lists",
    "there is two brothers who was 18 years old",
    "there is two brothers who was 18 years old",
  ]);
  const swpText = () => {
    if (arr.length > 1) {
      setData(["who was from Pakistan", "who was from Pakistan"]);
    }
  };
  const bttn = () => {
    let dlt = setData(arr.slice(0, 1));
    arr = dlt;
    alert("kill");
  };

  return (
    <>
      <div className="border">
        <div className="App">
          <h3>Welcome user on second page</h3>
          <div>
            <Link href="/">
              <Button click={btnCaller}>Home</Button>
            </Link>
          </div>
          <br />
          <div>You can change this by clicking this</div>
          <br />
          <div>
            <Button click={swpText}>change</Button>
            <br />
            <List arr={arr}></List>
          </div>
          <br />
          <Button click={bttn}>delete</Button>
        </div>
      </div>
    </>
  );
}
export default Ramz;
