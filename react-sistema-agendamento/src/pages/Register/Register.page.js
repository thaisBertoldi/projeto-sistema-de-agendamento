import { useFormik } from "formik";
import { AllForm, Button, DivForm, Input, LabelInput } from "./Register.style";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      cpf: "",
      description: "",
      date: "00/00/0000",
      time: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      navigate('/');
    },
  });
  return (
    <div>
      <h2>Cadastro de consulta</h2>
      <form onSubmit={formik.handleSubmit}>
        <AllForm>
          <DivForm>
            <LabelInput htmlFor="name">Nome do paciente</LabelInput>
            <Input
              type="text"
              id="name"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
          </DivForm>
          <DivForm>
            <LabelInput htmlFor="email">Email do paciente</LabelInput>
            <Input
              type="email"
              id="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </DivForm>
          <DivForm>
            <LabelInput htmlFor="cpf">CPF do paciente</LabelInput>
            <Input
              type="text"
              id="cpf"
              name="cpf"
              onChange={formik.handleChange}
              value={formik.values.cpf}
            />
          </DivForm>
          <DivForm>
            <LabelInput htmlFor="description">Descricao da consulta</LabelInput>
            <Input
              type="text"
              id="description"
              name="description"
              onChange={formik.handleChange}
              value={formik.values.description}
            />
          </DivForm>
          <DivForm>
            <LabelInput htmlFor="date">Data da consulta</LabelInput>
            <Input
              type="date"
              id="date"
              name="date"
              onChange={formik.handleChange}
              value={formik.values.date}
            />
          </DivForm>
          <DivForm>
            <LabelInput htmlFor="time">Hora da consulta</LabelInput>
            <Input
              type="time"
              id="time"
              name="time"
              onChange={formik.handleChange}
              value={formik.values.time}
            />
          </DivForm>
        </AllForm>

        <Button type="submit">Cadastrar</Button>
      </form>
    </div>
  );
}

export default Register;
