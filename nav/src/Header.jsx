import React from "react";

import { useStore, useGetTodosQuery } from 'store/hooks';

export default () => {
  const { count, clear } = useStore();

  const { data } = useGetTodosQuery({limit: 2});

  return (
    <header>
      <p>Awesome Header {data?.[0].title}</p>
      <div>
        {count}

        <button
          onClick={clear}
        >
          Clear
        </button>
      </div>
    </header>
  );
};
