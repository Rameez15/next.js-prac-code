import { useState } from "react";
import Button from "@/components/buttons/Button";
import Greet from "@/components/greets/Greet";
import List from "@/components/list/List";
import Link from "next/link";

export default function Home() {
  let [arr, setarr] = useState(["This is List of items"]);
  let ind = arr.length;

  const addItem = () => {
    setarr([...arr, `This is ${ind} item`]);
    alert("item added");
  };
  const refer = () => {
    alert("hi");
  };
  const deleted = () => {
    let rem = setarr(arr.slice(0, 1));
    arr = rem;
    ind = 1;
    alert("item deleted");
  };
  return (
    <>
      <title>App makers</title>
      <div className="border">
        <div className="App">
          ``
          <h1>rameez ahmed khan</h1>
          <div>
            <Greet />
          </div>
          <div>here is rameez can you beat me</div>
          <List arr={arr}></List>
          <div>
            <Button click={addItem}>Click Only</Button>
          </div>
          <br />
          <div>
            <Link href="/users">
              <Button click={refer}>Next page</Button>
            </Link>
          </div>
          <br />
          <div>
            <Link href="/customers">
              <Button click={refer}>Projects page</Button>
            </Link>
          </div>
          <br />
          <div>
            <Link href="/todos">
              <Button click={refer}>Todos page</Button>
            </Link>
          </div>
          <br />
          <Button click={deleted}>Delete</Button>
        </div>
      </div>
    </>
  );
}
