import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';


if (document.getElementById('app')) {
    const Index = ReactDOM.createRoot(document.getElementById("app"));
  
    Index.render(
      
        <React.StrictMode>
          <Router/>
        </React.StrictMode>
    )
}

