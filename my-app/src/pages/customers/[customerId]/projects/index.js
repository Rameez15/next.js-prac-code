import Link from "next/link";
import { useRouter } from "next/router";

export default function () {
  const route = useRouter();
  const { customerId } = route.query;
  return (
    <>
      <div>
        <h1>client {customerId}'s page</h1>
        <ol>
          <li>
            calculator
            <strong>
              <Link href={`/customers/${customerId}/projects/calculator`}>
                go to details
              </Link>
            </strong>
          </li>
          <li>
            E-commerce
            <strong>
              <Link href={`/customers/${customerId}/projects/E-commerce`}>
                go to details
              </Link>
            </strong>
          </li>
        </ol>
      </div>
    </>
  );
}
