import React, { Component } from 'react'
import Calendar from '../../components/Calendar'
import { DivHome, DivInstructions, DivSectionInstruction, H2Instruction, LiInstruction, UlInstruction } from './Home.style'
import { HiOutlineClipboardDocumentList } from 'react-icons/hi2'
import { GiCheckMark } from 'react-icons/gi'

export class Home extends Component {
  render() {
    return (
      <DivHome>
        <DivInstructions>
            <DivSectionInstruction>
                <H2Instruction><HiOutlineClipboardDocumentList /> Instructions</H2Instruction>
                <UlInstruction>
                    <LiInstruction><GiCheckMark />Select dates and you will be prompted to create a new event</LiInstruction>
                    <LiInstruction><GiCheckMark />Drag, drop, and resize events</LiInstruction>
                    <LiInstruction><GiCheckMark />Click an event to delete it</LiInstruction>
                </UlInstruction>
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