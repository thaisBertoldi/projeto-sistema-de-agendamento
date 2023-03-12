import React from 'react'
import { GiCheckMark } from 'react-icons/gi'
import { HiOutlineClipboardDocumentList } from 'react-icons/hi2'
import { Link } from 'react-router-dom'
import Calendar from '../../components/Calendar/Calendar.component'
import { DivHome, DivInstructions, DivSectionInstruction, H2Instruction, LiInstruction, UlInstruction } from './Home.style'

function Home() {

    return (
      <DivHome>
        <DivInstructions>
            <DivSectionInstruction>
                <div>
                    <H2Instruction><HiOutlineClipboardDocumentList /> Instruções</H2Instruction>
                    <UlInstruction>
                        <LiInstruction><GiCheckMark /><Link to="/register">Clique aqui</Link> para preencher o formulário e agendar sua consulta.</LiInstruction>
                    </UlInstruction>
                </div>
                <div>
                    <H2Instruction><HiOutlineClipboardDocumentList /> Listagem das consultas</H2Instruction>
                    <UlInstruction>
                        <LiInstruction><GiCheckMark /><Link to={'/list'}>Clique aqui</Link> para ver todas as consultas</LiInstruction>
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

export default Home