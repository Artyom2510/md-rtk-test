import React from "react";

import Header from 'nav/Header';
import { useStore, useGetTodosQuery} from 'store/hooks';

export const Test = () => {
  const { count, increment } = useStore();

  const { data } = useGetTodosQuery({limit: 2});

  return (
    <>
      <Header />
      <div>
        <div>Name: wrapper</div>
      </div>
        <p>Count: {count}</p>
        <div>
          <button
            onClick={increment}
          >
            Add
          </button>
        </div>
        <ul>
          {data?.map(el => <li key={el.id}>{el.title}</li>)}
        </ul>
    </>
  );
}

