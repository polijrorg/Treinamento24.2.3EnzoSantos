import styled from 'styled-components';

export const StyledBarraLateral = styled.div`
    display: flex;
    width: 22%;
    height: 100vh;
    padding: 32px 0px;
    flex-direction: column;
    align-items: center;
    gap: 240px;
    flex-shrink: 0;
    border-right: 1px solid #4c5155;
    background: #1a1d1e;
    position: fixed;
    left: 0;
    top: 0;
`;

export const StyledBarraTitulo = styled.div`
    width: 100%;
    text-align: center;
    padding-top: 0px;
    color: #ecedee;
    font-family: Nunito;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 6px;
`;

export const StyledTextoMenus = styled.div`
    display: flex;
    width: 179px;
    height: 57px;
    flex-direction: row;
    flex-shrink: 0;
    color: #ecedee;
    font-family: Nunito;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0px;
    margin-left: 16px;
    text-align: left;
    place-items: center;
`;

export const CaixaSelecao = styled.div`
    display: flex;
    width: 95%;
    padding: 0px 16px;
    align-items: center;
    gap: 10px;
    border-radius: 0px 80px 80px 0px;
    background: #3e63dd;
`;
