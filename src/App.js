import React from "react";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter  as Router} from "react-router-dom";
import Routes from "./components/Routes/Routes";
import Data from "./components/common/Data"

function App() {
    //Items
    const {productItems} = Data;
    return (
        <div>
        <Router>
        <Navbar />
        <Routes productItems={productItems}/>
        </Router>
        </div>
    );
}

export default App;
