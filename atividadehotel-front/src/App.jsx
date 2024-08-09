import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Home from "./pages/Home";
import Clientes from "./pages/Clientes";
import NovoCliente from "./pages/NovoCliente";
import EditarCliente from "./pages/EditarCliente";
import Reserva from "./pages/Reservas";
import Quarto from "./pages/Quartos";
import Pagamentos from "./pages/Pagamentos";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/clientes/novo" element={<NovoCliente />} />
          <Route path="/clientes/editar/:id" element={<EditarCliente />} />
          <Route path="/reserva" element={<Reserva />} />
<<<<<<< HEAD
=======
          <Route path="/reserva/novo" element={<AdicionarReservas />}/>
>>>>>>> 7474d3e77d43e088dc33bd64aa3667eb23a6190e
          <Route path="/quartos" element={<Quarto />} />
          <Route path="/pagamentos" element={<Pagamentos />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="bottom-right" />
    </>
  );
}

export default App;
