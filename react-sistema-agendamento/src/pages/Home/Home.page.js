import React, { Component } from 'react'
import Calendar from '../../components/Calendar.component'
import { DivHome, DivInstructions, DivSectionInstruction, H2Instruction, LiInstruction, LinkHome, UlInstruction } from './Home.style'
import { HiOutlineClipboardDocumentList } from 'react-icons/hi2'
import { GiCheckMark } from 'react-icons/gi'

export class Home extends Component {
  render() {
    return (
      <DivHome>
        <DivInstructions>
            <DivSectionInstruction>
                <LinkHome to="/register">Cadastrar Consulta</LinkHome>
                <div>
                    <H2Instruction><HiOutlineClipboardDocumentList /> Instruções</H2Instruction>
                    <UlInstruction>
                        <LiInstruction><GiCheckMark />Clique em "Cadastrar consulta" para iniciar preencher o formulário e agendar sua consulta.</LiInstruction>
                    </UlInstruction>
                </div>

            </DivSectionInstruction>
        </DivInstructions>
        <div>
            <Calendar />
        </div>
      </DivHome>
    )
  }
}

export default Home