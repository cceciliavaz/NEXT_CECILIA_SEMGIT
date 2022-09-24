/* eslint-disable @next/next/no-img-element */
import { NextPage } from 'next';
import React from 'react';
import { DetectDevice } from '../utils/device';

type HeaderProps = {
    sair(): void,
    setShowModal(e: boolean): void
}

export const Header: NextPage<HeaderProps> = ({ sair, setShowModal }) => {

    const fullName = localStorage.getItem('userName');
    const userName = fullName?.split(' ')[0] || '...';

    


    return (
        <div className="container-header">
            <img src="./icons/logo.svg" alt="Logo Fiap" className="logo" />
            <button onClick={e => setShowModal(true)}><span>+</span>Adicionar Tarefa</button>
            <div className={(DetectDevice() ? "mobile" : "desktop")}>
                <span>Olá {userName}</span>
                <img src="./icons/exit-mobile.svg" alt="Sair" onClick={sair} />
            </div>
        </div>
    );



}

function isMobile() {
    throw new Error('Function not implemented.');
}
