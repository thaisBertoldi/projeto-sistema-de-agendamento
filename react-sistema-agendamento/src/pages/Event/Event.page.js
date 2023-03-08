import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api";
import Notiflix from "notiflix";
import { Button, Container, DivAvatar, DivData, DivEmail, DivFinish, DivName, DivNameUser, DivTime, DivTitle } from "./Event.style";
import { FaUserCircle } from 'react-icons/fa';

export default function Event() {
  const { id } = useParams();
  const [appointmentData, setAppointmentData] = useState([]);

  async function getById() {
    await api.get(`/getById/${id}`).then(res => {
      setAppointmentData(res.data);
    }).catch(err => {
      Notiflix.Notify.failure("Não foi possível concluir a operação. " + err.response.data.error);
      console.log(err);
    })
  }

  useEffect(() => {
    getById();
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container>
      <DivNameUser>
        <DivAvatar>
          <FaUserCircle size={100}/>
        </DivAvatar>
        <DivData>
          <DivName>{appointmentData.name}</DivName>
          <DivEmail>{appointmentData.email}</DivEmail>
          <div>{appointmentData.cpf}</div>
        </DivData>
      </DivNameUser>
      <DivTitle>
          <h3>Descrição: </h3>
          <p>{appointmentData.description}</p>
      </DivTitle>
      <DivTime>
          <h3>Data: </h3>
          <p>{appointmentData.date}</p>
          <h3>Hora: </h3>
          <p>{appointmentData.time}</p>
      </DivTime>
      <DivFinish>
        <Button>Finalizar Consulta</Button>
      </DivFinish>
    </Container>
  )
}
