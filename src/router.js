import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import App from "./App";
import Tools from "./component/Tools/tools";
import Home from "./pages/Home";
import HomeLayout from "./layout";
import ToolsConfig from "./pages/ToolsConfig"


class MainRouter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <BrowserRouter>
                <App>
                    <HomeLayout>
                        <Route path="/admin/home">
                            <Home/>
                        </Route>
                        <Route path="/admin/tools">
                            <Tools/>
                        </Route>
                        <Route path="/admin/toolsConfig">
                            <ToolsConfig/>
                        </Route>
                    </HomeLayout>
                </App>
            </BrowserRouter>
        )
    }
}


export default MainRouter;