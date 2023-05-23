import React from "react";

import {Test} from './Test';
import { StoreProvider } from 'store/Provider';

const Wrapper = () => {
  return (
    <StoreProvider>
      <Test />
    </StoreProvider>
  );
}

  export default Wrapper;
