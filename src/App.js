import './assets/styles/main.scss'
import {
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ErrorPage from "./pages/Error";
import Header from "./containers/Header";

const App = () => {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route exact path='/' element={<HomePage/>}/>
                <Route
                    path="/home"
                    element={<Navigate to="/"/>}
                />
                <Route path='/about' element={<AboutPage/>}/>
                <Route path='*' element={<ErrorPage/>}/>
            </Routes>
            <h1>Hello world</h1>
        </div>
    );
}

export default App;
