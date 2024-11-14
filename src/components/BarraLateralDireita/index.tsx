import React from 'react';
import * as S from './styles';

export const BarraLateralDireita: React.FC = () => {
    return (
        <S.StyledBarraLateral>
            <S.StyledBarraTitulo>
                <img
                    src="/assets/icons/fogo.png"
                    alt="Fogo"
                    style={{
                        width: '32px',
                        height: 'auto',
                        marginRight: '0px',
                        verticalAlign: '-6px'
                    }}
                />
                Pius em alta
            </S.StyledBarraTitulo>
        </S.StyledBarraLateral>
    );
};
