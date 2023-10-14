import { useRouter } from "next/router";

export default function () {
  const route = useRouter();
  const { customerId, projectDetail } = route.query;
  return (
    <>
      <div>
        <h1>
          {customerId}'s {projectDetail} project details
        </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos
          temporibus soluta repudiandae rem, et vitae voluptatibus molestias
          beatae reprehenderit consequatur debitis veritatis cupiditate maxime
          expedita eligendi voluptates voluptate eos. Cumque. Lorem, ipsum dolor
          sit amet consectetur adipisicing elit. Minus obcaecati earum tempore
          facere blanditiis voluptate accusantium repudiandae odio, hic nostrum
          quam rem sequi ducimus corporis tempora aperiam labore, nisi quis.
        </p>
      </div>
    </>
  );
}
