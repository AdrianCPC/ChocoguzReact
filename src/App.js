import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Cortado from "./components/Pages/Cortado";
import Footer from "./components/Pages/Footer";
import Home from "./components/Pages/Home";
import Natural from "./components/Pages/Natural";
import Shop from "./components/Pages/Shop";
import Tentacion from "./components/Pages/Tentacion";


function App() {
    return (
        <div>
            <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/shop" exact component={Shop}/>
                <Route path="/all" exact component={Shop}/>
                <Route path="/natural" exact component={Natural}/>
                <Route path="/tentacion" exact component={Tentacion}/>
                <Route path="/cortado" exact component={Cortado}/>
            </Switch>
            <Footer/>
            </Router>
        </div>
    );
}

export default App;
