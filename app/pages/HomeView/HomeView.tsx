import { useEffect, useState } from "react";
import ArticleComponent from "~/components/global/ArticleComponent/ArticleComponent";
import CounterComponent from "~/components/global/CounterComponent/CounterComponent";

export default function HomeView() {

  const [count, setCount] = useState(0);

  const onIncrementCount = () => {
    setCount(prev => prev + 1);
  }

  return (
    <>
      <section>
        <CounterComponent props={{
          count: count,
          handleIncrementCount: onIncrementCount
        }}/>

        <ArticleComponent/>

        <ArticleComponent
          title={`Lorem ipsum dolor sit amet.`}
          image="https://placehold.co/600x400"
          content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi facere amet minima vitae suscipit at minus molestiae maiores odit? Ipsam, fuga doloribus quas laboriosam ex aut, voluptas deleniti explicabo accusantium dolorem magnam veniam! Voluptate mollitia magni necessitatibus maxime suscipit similique."
        />

        <ArticleComponent>
          <h2>
            Lorem ipsum dolor
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi facere amet minima vitae suscipit at minus molestiae maiores odit? Ipsam, fuga doloribus quas laboriosam ex aut.
          </p>
        </ArticleComponent>
      </section>
    </>
  );
}
