import React from 'react';
import ReactDOM from 'react-dom/client';
import BooksSearch from "./components/BooksSearch";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BooksSearch />
  </React.StrictMode>
);

