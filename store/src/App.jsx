import React from "react";
import { createRoot } from 'react-dom/client';


const App = () => (
  <div>
    <p>Name: store</p>
  </div>
);
const root = createRoot(document.getElementById('root'));
root.render(<App />);
