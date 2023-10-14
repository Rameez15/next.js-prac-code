import Button from "@/components/buttons/Button";
import Link from "next/link";

export default function (props) {
  let swapPage = () => alert("welcome user");
  const { products } = props;
  console.log(products);
  if (!products) {
    return <div>...Loading</div>;
  }

  return (
    <div className="border">
      <div className="App">
        <h1>Products:</h1>
        <ul>
          {products.map((product) => {
            <li key={product.id}>
              <Link href={`/todos/${product.id}`}>{product.title}</Link>
            </li>;
          })}
        </ul>

        <br />
        <div>
          <Link href="/">
            <Button click={swapPage}>Back</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://dummyjson.com/products/");
  const data = await res.json();
  return {
    props: {
      products: data.products,
    },
    revalidate: 10,
  };
}
