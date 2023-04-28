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
              required: "O e-mail é obrigatório.",
              maxLength: { value: 255, message: "Limite de 255 caracteres." },
            })}
          />
          {errors.email && (
            <Form.Text className="invalid-feedback">
              {errors.email.message}
            </Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Porte</Form.Label>
          <Form.Control
            type="tel"
            className={errors.telefone && "is-invalid"}
            {...register("telefone", {
              required: "O telefone é obrigatório.",
              maxLength: { value: 255, message: "Limite de 255 caracteres." },
            })}
          />
          {errors.telefone && (
            <Form.Text className="invalid-feedback">
              {errors.telefone.message}
            </Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Data de Nascimento</Form.Label>
          <Form.Control
            type="text"
            className={errors.endereco?.cidade && "is-invalid"}
            {...register("endereco.cidade", {
              required: "A cidade é obrigatória.",
              maxLength: { value: 255, message: "Limite de 255 caracteres." },
            })}
          />
          {errors.endereco?.cidade && (
            <Form.Text className="invalid-feedback">
              {errors.endereco?.cidade.message}
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
