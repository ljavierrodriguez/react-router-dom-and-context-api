import { BrowserRouter, Route, Switch } from "react-router-dom"
import Navbar from "./components/Navbar";
import About from "./views/About";
import Home from "./views/Home"
import Info from "./views/Info";
import NotFound from "./views/NotFound";

const Layout = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path={"/shows/:show_name/nacionales"} component={Info} />
                <Route path={"/docs/:version/:section/:element"} component={Info} />
                <Route path={"/about"} component={About} />
                <Route exact path={"/"} component={Home} />
                <Route component={NotFound} />
            </Switch>

        </BrowserRouter>
    )
}

export default Layout;