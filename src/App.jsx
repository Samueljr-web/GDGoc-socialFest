import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import SecureDashboard from "./components/secureDashboard";
import { Bounce, ToastContainer } from "react-toastify";
import Register from "./pages/register";

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <BrowserRouter>
        <Routes>
          <Route element={<SecureDashboard />}>
            <Route path="/*" element={<Dashboard />} />
          </Route>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
