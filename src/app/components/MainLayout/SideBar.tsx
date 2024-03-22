'use client';
import Image from 'next/image';
import { BarsArrowDownIcon } from '@heroicons/react/24/solid';
import { FaArrowLeft } from 'react-Icons/fa';
import { HiHome, HiDownload, HiUpload, HiDocumentReport } from 'react-Icons/hi';
import { MdEditDocument, MdOutlineSettings } from 'react-Icons/md';
import { RiArrowUpDownLine } from 'react-Icons/ri';
import { BiLogOut } from 'react-Icons/bi';
import { signOut } from 'next-auth/react';

import styles from '@/styles/default_layout/SideBar.module.css';
import FunctionButton from './FunctionButton';
import { useState } from 'react';
import SvgTFD from './svgTFD';

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="flex ">
      <div
        className={`bg-white rounded-r-lg shadow-md justify-center h-screen p-5 pt-8 ${isOpen ? 'w-56' : 'w-20'}
         duration-300 relative x `}
      >
        {isOpen && <SvgTFD w={180} h={80}></SvgTFD>}
        {!isOpen && (
          <div className="absolute top-5 left-2">
            <SvgTFD w={60} h={40}></SvgTFD>
          </div>
        )}
        <div className="my-10"></div>
        <FaArrowLeft
          className={`text-white bg-[#026306] text-1x3 rounded-full absolute
          w-7 h-7 p-2 cursor-pointer -right-4 top-5
          ${!isOpen && 'rotate-180 duration-300 '}`}
          onClick={() => setIsOpen(!isOpen)}
        />

        <FunctionButton
          icon={HiHome}
          size={27}
          texto="Home"
          color="#0B1145"
          isOpen={isOpen}
        />
        <FunctionButton
          icon={MdEditDocument}
          size={27}
          texto="Cadastros"
          color="#0B1145"
          isOpen={isOpen}
        />
        <FunctionButton
          icon={HiDownload}
          size={27}
          texto="Receber Processos"
          color="#0B1145"
          isOpen={isOpen}
        />
        <FunctionButton
          icon={RiArrowUpDownLine}
          size={27}
          texto="Liberar Processos"
          color="#0B1145"
          isOpen={isOpen}
        />
        <FunctionButton
          icon={HiUpload}
          size={27}
          texto="Devolver Processos"
          color="#0B1145"
          isOpen={isOpen}
        />
        <FunctionButton
          icon={HiDocumentReport}
          size={27}
          texto="Relatórios"
          color="#026306"
          onClick={'/views/entidades'}
          isOpen={isOpen}
        />
      </div>
    </div>
  );
}
