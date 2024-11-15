import React from 'react';
import { PinLeftIcon } from '@radix-ui/react-icons';
import { relative } from 'path';
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
                <div style={{ marginTop: '40px' }}>
                    <S.CaixaSelecao>
                        <S.StyledTextoMenus>
                            <img
                                src="/assets/icons/home.png"
                                alt="casa"
                                style={{
                                    width: '24px',
                                    height: '24px',
                                    marginLeft: '16px',
                                    marginRight: '10px'
                                }}
                            />
                            Página Inicial
                        </S.StyledTextoMenus>
                    </S.CaixaSelecao>
                </div>
                <div>
                    <S.StyledTextoMenus>
                        {' '}
                        <img
                            src="/assets/icons/sino.png"
                            alt="casa"
                            style={{
                                width: '24px',
                                height: '24px',
                                marginLeft: '16px',
                                marginRight: '10px'
                            }}
                        />
                        Notificações
                    </S.StyledTextoMenus>
                </div>
                <div>
                    <S.StyledTextoMenus>
                        {' '}
                        <img
                            src="/assets/icons/mensagem.png"
                            alt="casa"
                            style={{
                                width: '24px',
                                height: '24px',
                                marginLeft: '16px',
                                marginRight: '10px'
                            }}
                        />
                        Mensagens
                    </S.StyledTextoMenus>
                </div>
                <div>
                    <S.StyledTextoMenus>
                        {' '}
                        <img
                            src="/assets/icons/nuvem.png"
                            alt="casa"
                            style={{
                                width: '24px',
                                height: '24px',
                                marginLeft: '16px',
                                marginRight: '10px'
                            }}
                        />
                        Salvos
                    </S.StyledTextoMenus>
                </div>
                <div>
                    <S.StyledTextoMenus>
                        {' '}
                        <img
                            src="/assets/icons/perfil.png"
                            alt="casa"
                            style={{
                                width: '24px',
                                height: '24px',
                                marginLeft: '16px',
                                marginRight: '10px'
                            }}
                        />
                        Perfil
                    </S.StyledTextoMenus>
                </div>
                <div>
                    <S.StyledTextoMenus>
                        {' '}
                        <img
                            src="/assets/icons/engrenagem.png"
                            alt="casa"
                            style={{
                                width: '24px',
                                height: '24px',
                                marginLeft: '16px',
                                marginRight: '10px'
                            }}
                        />
                        Configurações
                    </S.StyledTextoMenus>
                </div>
            </S.StyledBarraTitulo>
            <div>
                <img
                    src="/assets/icons/fotoperfil.png"
                    alt="Foto de Perfil"
                    style={{
                        width: '64px',
                        height: '64px',
                        borderRadius: '50%',
                        position: 'absolute',
                        bottom: '160px',
                        left: '42%'
                    }}
                />
            </div>
            <div>
                <img
                    src="/assets/icons/logout.png"
                    alt="Logout"
                    style={{
                        width: '64px',
                        height: '64px',
                        position: 'absolute',
                        bottom: '56px',
                        left: '40%'
                    }}
                />
            </div>
        </S.StyledBarraLateral>
    );
};
