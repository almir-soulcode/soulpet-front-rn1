import axios from "axios";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function NovoPet() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  function onSubmit(data) {
    axios
      .post("http://localhost:3001/pets", data)
      .then((response) => {
        toast.success("Pet adicionado.", {
          position: "bottom-right",
          duration: 2000,
        });
        navigate("/pets");
      })
      .catch((error) => {
        toast.error("Algo deu errado.", {
          position: "bottom-right",
          duration: 2000,
        });
        console.log(error);
      });
  }

  return (
    <div className="container">
      <h1>Novo Pet</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            className={errors.nome && "is-invalid"}
            {...register("nome", {
              required: "O nome é obrigatório.",
              maxLength: { value: 130, message: "Limite de 130 caracteres." },
            })}
          />
          {errors.nome && (
            <Form.Text className="invalid-feedback">
              {errors.nome.message}
            </Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Tipo</Form.Label>
          <Form.Control
            type="text"
            className={errors.tipo && "is-invalid"}
            {...register("tipo", {
              required: "O tipo é obrigatório.",
              maxLength: { value: 100, message: "Limite de 100 caracteres." },
            })}
          />
          {errors.tipo && (
            <Form.Text className="invalid-feedback">
              {errors.tipo.message}
            </Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Porte</Form.Label>
          <Form.Control
            type="text"
            className={errors.porte && "is-invalid"}
            {...register("porte", {
              required: "O porte é obrigatório.",
              maxLength: { value: 100, message: "Limite de 255 caracteres." },
            })}
          />
          {errors.porte && (
            <Form.Text className="invalid-feedback">
              {errors.porte.message}
            </Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Data de Nascimento</Form.Label>
          <Form.Control type="date" min="2003-01-01" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Identificação do Cliente</Form.Label>
          <Form.Control
            type="number"
            className={errors.clienteId && "is-invalid"}
            {...register("clienteId", {
              required: "O ID é obrigatório.",
            })}
          />
          {errors.clienteId && (
            <Form.Text className="invalid-feedback">
              {errors.ClienteId.message}
            </Form.Text>
          )}
        </Form.Group>

        <Button variant="primary" type="submit">
          Cadastrar
        </Button>
      </Form>
    </div>
  );
}
