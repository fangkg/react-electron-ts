import React from "react";
import ReactDOM from "react-dom";
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Title from './title'

function App(){
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <div>可视化 electron + react</div>
                    <Title text={"标题"}/>
                </Route>
            </Switch>
        </Router>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"));
