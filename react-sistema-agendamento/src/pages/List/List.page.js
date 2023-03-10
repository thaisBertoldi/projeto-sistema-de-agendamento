import Notiflix from "notiflix";
import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import api from "../../api";
import {
  Container,
  DivNameUser,
  DivData,
  DivName,
  DivEmail,
  DivTitle,
  DivTime,
  InputSearch,
  Button,
  DivFinish,
} from "./List.style";

function List() {
  const [appointmentData, setAppointmentData] = useState([]);

  async function getById() {
    await api
      .get(`get-all-appointments`)
      .then((res) => {
        setAppointmentData(res.data);
      })
      .catch((err) => {
        Notiflix.Notify.failure(
          "Não foi possível concluir a operação. " + err.response.data.error
        );
        console.log(err);
      });
  }

  useEffect(() => {
    getById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <div>
        <InputSearch type="search" name="search" id="search" placeholder="Digite o email ou o CPF"/>
        <Button>Pesquisar</Button>
      </div>
      {appointmentData.map((appointment) => (
        <div>
          <DivNameUser>
            <DivData>
              <DivName>{appointment.name}</DivName>
              <DivEmail>{appointment.email}</DivEmail>
              <div>{appointment.cpf}</div>
            </DivData>
          </DivNameUser>
          <DivTitle>
            <h3>Descrição: </h3>
            <p>{appointment.description}</p>
          </DivTitle>
          <DivTime>
            <h3>Data: </h3>
            <p>{appointment.date}</p>
            <h3>Hora: </h3>
            <p>{appointment.time}</p>
          </DivTime>
          <DivFinish>
            <h3>Status: </h3>
            {appointment.finished ? (
              <p>Finalizado</p>
            ) : (
              <p>Não finalizado</p>
            )}
          </DivFinish>
        </div>
      ))}
    </Container>
  );
}

export default List;
