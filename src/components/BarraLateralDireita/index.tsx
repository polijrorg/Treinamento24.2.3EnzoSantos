import React from 'react';
import Divider from 'components/Divider';
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
                <div>
                    <Divider
                        color="#4C5155"
                        thickness="1px"
                        margin="20px 0"
                        width="92%"
                    />
                </div>
                <div>
                    <Divider
                        color="#4C5155"
                        thickness="1px"
                        margin="173px 0"
                        width="92%"
                    />
                </div>
                <div>
                    <Divider
                        color="#4C5155"
                        thickness="1px"
                        margin="173px 0"
                        width="92%"
                    />
                </div>
                <div>
                    <Divider
                        color="#4C5155"
                        thickness="1px"
                        margin="173px 0"
                        width="92%"
                    />
                </div>
                <div>
                    <Divider
                        color="#4C5155"
                        thickness="1px"
                        margin="173px 0"
                        width="92%"
                    />
                </div>
                <div>
                    <Divider
                        color="#4C5155"
                        thickness="1px"
                        margin="173px 0"
                        width="92%"
                    />
                </div>
            </S.StyledBarraTitulo>
        </S.StyledBarraLateral>
    );
};
