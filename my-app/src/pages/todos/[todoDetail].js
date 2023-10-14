export default function (props) {
  const { productDetail } = props;

  // if (!todo) {
  //   return <div>...Loading</div>;
  // }
  return (
    <>
      <h1>* {productDetail.title} description :</h1>
      <div>
        <img
          alt={`image of ${productDetail.title}`}
          src={productDetail.thumbnail}
        />
      </div>
      <br />
      <div className="border">
        <div className="App">
          <ol>
            <li>brand of {productDetail.brand}.</li>
            <li>{productDetail.description}.</li>
            <li>price is $ {productDetail.price}.</li>
            <li>discount per percent is {productDetail.discountPercentage}.</li>
            <li>rating is {productDetail.rating}.</li>
            <li>stock of pieces are {productDetail.stock}.</li>
          </ol>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const { todoDetail } = params;
  const res = await fetch(`https://dummyjson.com/products/${todoDetail}`);
  const data = await res.json();
  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      productDetail: data,
    },

    revalidate: 10,
  };
}

export async function getStaticPaths() {
  console.log("getstatic props runs once========1");
  const res = await fetch(`https://dummyjson.com/products/`);
  const data = await res.json();
  const items = data.products.map((res) => {
    return { params: { todoDetail: res.id.toString() } };
  });

  return {
    paths: items,
    fallback: "blocking", // "true" or "blocking"
  };
}
