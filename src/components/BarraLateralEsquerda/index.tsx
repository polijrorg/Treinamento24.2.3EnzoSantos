import React from 'react';
import * as S from './styles';

export const BarraLateralEsquerda: React.FC = () => {
    return (
        <S.StyledBarraLateral>
            <S.StyledBarraTitulo>
                <img
                    src="/assets/icons/logo.png"
                    alt="Logo"
                    style={{
                        width: '48px',
                        height: 'auto',
                        marginRight: '16px',
                        verticalAlign: '-14px'
                    }}
                />
                PIUPIUWER
            </S.StyledBarraTitulo>
        </S.StyledBarraLateral>
    );
};
