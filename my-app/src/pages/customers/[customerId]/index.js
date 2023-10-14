import Link from "next/link";
import { useRouter } from "next/router";

export default function () {
  const route = useRouter();
  const { customerId } = route.query;
  return (
    <>
      <div>
        <h1>client {customerId} details page</h1>
        <h2>Projects</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos
          temporibus soluta repudiandae rem, et vitae voluptatibus molestias
          beatae reprehenderit consequatur debitis veritatis cupiditate maxime
          expedita eligendi voluptates voluptate eos.
        </p>
        <Link href={`/customers/${customerId}/projects`}>
          go to client projects
        </Link>
      </div>
    </>
  );
}
