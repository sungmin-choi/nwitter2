import React, { useState } from 'react';
import AppRouter from './Router';
import {auth} from "../fbase";
function App() {
  const [init,setInit] = useState(false);

  return (
    <div className="App">
      <AppRouter init={init}/>
    </div>
  );
}

export default App;
