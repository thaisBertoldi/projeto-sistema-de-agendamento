import Notiflix from "notiflix";
import React, { useEffect, useState } from "react";
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
  DivCard,
  AllCards,
  DivSearch,
} from "./List.style";

function List() {
  const [appointmentData, setAppointmentData] = useState([]);
  const [appointmentSearch, setAppointmentSearch] = useState([]);

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

  async function searchAppointment() {
    await api.get(`search-appointment/${appointmentSearch}`).then(res => {
      setAppointmentData(res.data);
    }).catch(err => {
      console.log(err);
      Notiflix.Notify.failure('Não foram encontradas consultas com esses dados');
    }); 
  }

  useEffect(() => {
    getById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <DivSearch>
        <InputSearch type="search" name="search" id="search" placeholder="Digite o email ou o CPF" onChange={(event) => setAppointmentSearch(event.target.value)}/>
        <Button onClick={(event) => searchAppointment(event)}>Pesquisar</Button>
      </DivSearch>
      <AllCards>
      {appointmentData.map((appointment) => (
        <DivCard>
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
        </DivCard>
      ))}
      </AllCards>
    </Container>
  );
}

export default List;
