import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Recipes from "./components/Recipes";
import Calorie from "./components/Calorie";
import Login from "./components/Login";
import Signup from "./components/Signup";
import DietPlans from "./components/DietPlans";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/"
            element={<Main />}>
          </Route>
          <Route exact path="/recipes"
            element={<Recipes />}>
          </Route>
          <Route exact path="/calorie"
            element={<Calorie />}>
          </Route>
          <Route exact path="/diet"
            element={<DietPlans />}>
          </Route>
          <Route exact path="/login"
            element={<Login />}>
          </Route>
          <Route exact path="/signup"
            element={<Signup />}>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
