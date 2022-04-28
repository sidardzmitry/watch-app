import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Header from "./components-bootstrap/Header";
import HeaderContent from "./components-bootstrap/HeaderContent";
import HeaderCards from "./components-bootstrap/HeaderCards";
import NavBread from "./components-bootstrap/NavBread";
import CardList from "./components/CardList/CardList";
import sampleWatches from './sapmle-watches';



function App() {
  return (
    <React.Fragment>
        <Header />
        <HeaderContent/>
        <HeaderCards/>
        <NavBread/>
        <CardList sampleWatches={sampleWatches}/>
    </React.Fragment>
  );
};

export default App;
