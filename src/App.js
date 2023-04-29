import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Root } from "./pages/Root/Root";
import { Home } from "./pages/Home/Home";
import { NovoCliente } from "./pages/NovoCliente/NovoCliente";
import { Clientes } from "./pages/Clientes/Clientes";
import { EditaCliente } from "./pages/EditaCliente/EditaCliente";
import { NovoServicos } from "./pages/NovoServicos/NovoServicos";
import { EditarServico } from "./pages/EditarServico/EditarServico";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route path="/" element={<Home />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/clientes/novo" element={<NovoCliente />} />
          <Route path="/clientes/editar/:id" element={<EditaCliente />} />
          <Route path="/servicos/novo" element={<NovoServicos />} />
          <Route path="/servicos/editar/:id" element={<EditarServico/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
