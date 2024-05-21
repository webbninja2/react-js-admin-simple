import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/login";
import MainLayout from "./components/layout/layout";
import Dashboard from "./pages/dashboard/dashboard";
import About from "./pages/about/about";
import Profile from "./pages/profile/profile";
import Page404 from "./pages/404/404";
import AllUser from "./pages/users/all-user";
import { ToastContainer } from "react-toastify";
import AddUser from "./pages/users/add";
import { store } from "./store/store";
import { Provider } from "react-redux";
import ServerSide from "./pages/data-grid/server-side";
import ClientSideDataGrid from "./pages/data-grid/client-side";

function App() {
  console.log("process.env.REACT_APP_TITLE", process.env.REACT_APP_TITLE)
  return (
    <BrowserRouter>
      <ToastContainer />
      <Provider store={store}>
        <Routes>
          {/* Login Route without MainLayout */}
          <Route path="/" element={<Login />} />
          <Route
            path="/*"
            element={
              <MainLayout>
                <Routes>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/add-user" element={<AddUser />} />
                  <Route path="/all-user" element={<AllUser />} />
                  <Route path="/data-grid-server" element={<ServerSide />} />
                  <Route path="/data-grid-client" element={<ClientSideDataGrid />} />
                  <Route path="*" element={<Page404 />} />
                </Routes>
              </MainLayout>
            }
          />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
