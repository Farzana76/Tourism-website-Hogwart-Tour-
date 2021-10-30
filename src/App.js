import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Menu from './Components/Menu/Menu';
import Register from './Components/Register/Register';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute.js';
import AddServices from './Components/AddServices/AddServices';
import MyOrders from './Components/MyOrders/MyOrders';
import ManageAllOrders from './Components/ManageAllOrders/ManageAllOrders';
// import Coaches from './Components/Coaches/Coaches';
// import Recipes from './Components/Recipes/Recipes';

function App() {
  return (
    <div className="App bg-light">
      <AuthProvider>
        <BrowserRouter>
          <Menu></Menu>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/service/:sid&&:title">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            {/* <PrivateRoute path="/service/:sid">
              <ServiceDetail></ServiceDetail>
            </PrivateRoute>
            <PrivateRoute path="/coachdetail">
              <Coaches></Coaches>
            </PrivateRoute>
            <PrivateRoute path="/recipes">
              <Recipes></Recipes>
            </PrivateRoute> */}
            <PrivateRoute path="/manageAllOrders">
              <ManageAllOrders></ManageAllOrders>
            </PrivateRoute>
            <PrivateRoute path="/myOrders/:email&&:name">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/addService">
              <AddServices></AddServices>
            </PrivateRoute>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

