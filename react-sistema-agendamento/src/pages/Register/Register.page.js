import { useFormik } from "formik";
import {
  AlertErrorInput,
  AllForm,
  Button,
  DivForm,
  Input,
  LabelInput,
} from "./Register.style";
import { useNavigate } from "react-router-dom";
import InputMask from "react-input-mask";
import Notiflix from "notiflix";
import api from "../../api";
import * as Yup from "yup";
import moment from 'moment';

function Register() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      cpf: "",
      description: "",
      date: "",
      time: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Você precisa preencher esse campo."),
      email: Yup.string().required("Você precisa preencher esse campo."),
      cpf: Yup.string().required("Você precisa preencher esse campo."),
      date: Yup.string().required("Você precisa preencher esse campo."),
      time: Yup.string().required("Você precisa preencher esse campo."),
    }),
    onSubmit: async(values) => {
      await api.post("/create", values).then(res => {
          values.date = moment(values.date).format('yyyy/mm/do');
          Notiflix.Notify.success("Cadastro criado com sucesso!");
          navigate("/");
        }).catch(error => {
        console.log(error)
        Notiflix.Notify.failure("Não foi possível concluir a operação. " + error.response.data.err);
      });
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
            {formik.errors.name && formik.touched.name ? (
              <AlertErrorInput>{formik.errors.name}</AlertErrorInput>
            ) : null}
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
            {formik.errors.email && formik.touched.email ? (
              <AlertErrorInput>{formik.errors.email}</AlertErrorInput>
            ) : null}
          </DivForm>
          <DivForm>
            <LabelInput htmlFor="cpf">CPF do paciente</LabelInput>
            <Input
              as={InputMask}
              mask="999.999.999-99"
              placeholder="000.000.000-00"
              type="text"
              id="cpf"
              name="cpf"
              onChange={formik.handleChange}
              value={formik.values.cpf}
            />
            {formik.errors.cpf && formik.touched.cpf ? (
              <AlertErrorInput>{formik.errors.cpf}</AlertErrorInput>
            ) : null}
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
            {formik.errors.date && formik.touched.date ? (
              <AlertErrorInput>{formik.errors.date}</AlertErrorInput>
            ) : null}
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
            {formik.errors.time && formik.touched.time ? (
              <AlertErrorInput>{formik.errors.time}</AlertErrorInput>
            ) : null}
          </DivForm>
        </AllForm>

        <Button type="submit">Cadastrar</Button>
      </form>
    </div>
  );
}

export default Register;
