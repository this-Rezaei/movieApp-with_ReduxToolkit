import React from "react";
import "./App.scss";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import PageNotFound from "./components/PageNotFound/PageNotFound";
// import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <div className="container">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/Movie/:imdbID" component={MovieDetail} />
                    <Route component={PageNotFound} />
                </Switch>
                </div>
                {/* <Footer /> */}
            </Router>
        </div>
    );
}

export default App;
