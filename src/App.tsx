import React from 'react';
import Header from "./components/Header/Header";
import './scss/app.scss';
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";

function App() {

    return (
      <div className="wrapper">
          <Header />
          <div className="content">
              <div className="container">
                  <NotFound />
              </div>
          </div>
      </div>
  );
}

export default App;
