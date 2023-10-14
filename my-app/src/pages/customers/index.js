import Link from "next/link";

export default function () {
  return (
    <>
      <div>
        <h1>clients page</h1>
        <ol>
          <li>
            <Link href="customers/ahmed">ahmed</Link>
          </li>
          <li>
            <Link href="customers/khan">khan</Link>
          </li>
        </ol>
      </div>
    </>
  );
}
