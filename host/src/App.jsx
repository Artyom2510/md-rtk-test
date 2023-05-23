import React from 'react';
import { createRoot } from 'react-dom/client';

import Wrapper from 'wrapper/Wrapper';

const App = () => {
  return (
    <div>
      <div>Name: host</div>
      <Wrapper />
    </div>
  );
};

const root = createRoot(document.getElementById('root'));
root.render( <App /> );
