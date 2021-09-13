import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/Pages/Footer";
import Home from "./components/Pages/Home";
import Shop from "./components/Pages/Shop";


function App() {
    return (
        <div>
            <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/shop" exact component={Shop}/>
                <Route path="/all" exact component={Shop}/>
            </Switch>
            <Footer/>
            </Router>
        </div>
    );
}

export default App;
