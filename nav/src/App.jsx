import React from "react";
import { createRoot } from 'react-dom/client';

import Header from "./Header";
import { StoreProvider } from "store/provider";

const App = () => (
  <StoreProvider>
    <div>
      <Header />
      <div>Name: nav</div>
    </div>
  </StoreProvider>
);

const root = createRoot(document.getElementById('root'));
root.render( <App /> );
