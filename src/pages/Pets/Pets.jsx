import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Loader } from "../../components/Loader/Loader";

export function Pets() {

  const [pets, setPets] = useState(null);

  useEffect(() => {
    initializeTable();
  }, []);

  function initializeTable() {
    axios.get("http://localhost:3001/pets")
      .then(response => {
        setPets(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <div className="clientes container mt-3">
      <div className="d-flex justify-content-between align-items-center">
        <h1>Pets</h1>
        <Button as={Link} to="/pets/novo">
          <i className="bi bi-plus-lg me-2"></i> Pet
        </Button>
      </div>
      {
        pets === null ?
          <Loader />
          :
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>Tipo</th>
                <th>Porte</th>
                <th>Data de nascimento</th>
                <th>Id do cliente</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {pets.map(pets => {
                return (
                  <tr key={pets.id}>
                    <td>{pets.id}</td>
                    <td>{pets.nome}</td>
                    <td>{pets.tipo}</td>
                    <td>{pets.porte}</td>
                    <td>{pets.dataNasc}</td>
                    <td>{pets.clienteId}</td>
                    <td className="d-flex gap-2">
                      <Button>
                        <i className="bi bi-trash-fill"></i>
                      </Button>
                      <Button>
                        <i className="bi bi-pencil-fill"></i>
                      </Button>
                      <Button as={Link} to="/pets/detalhes">
                        <i class="bi bi-search"></i>
                      </Button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
      }
    </div>
  );
}