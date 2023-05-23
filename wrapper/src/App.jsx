import React from "react";
import { createRoot } from 'react-dom/client';

import Wrapper from "./Wrapper";

const App = () => ( <Wrapper /> );

const root = createRoot(document.getElementById('root'));
root.render( <App /> );