import React from 'react';
import { BarraLateralEsquerda } from 'components/BarraLateralEsquerda';
import { BarraLateralDireita } from 'components/BarraLateralDireita';
import { Background } from 'components/Background';
import Piu from 'components/Piu';

const HomeTemplate = () => {
    return (
        <>
            <head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap"
                    rel="stylesheet"
                />
            </head>
            <Background>
                <Piu />
            </Background>
            <BarraLateralEsquerda />
            <BarraLateralDireita />
        </>
    );
};
export default HomeTemplate;
