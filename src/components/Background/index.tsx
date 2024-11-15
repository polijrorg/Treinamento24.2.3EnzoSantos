import React from 'react';
import Divider from 'components/Divider';
import { DividerProps } from 'components/Divider/index';
import * as S from './styles';

interface BackgroundProps extends DividerProps {
    children: React.ReactNode; // Adiciona suporte para children
}

export const Background: React.FC<BackgroundProps> = ({
    color,
    thickness,
    margin,
    width
}: DividerProps) => {
    return (
        <S.StyledBackground>
            <Divider
                color={color || '#4C5155'}
                thickness={thickness || '1px'}
                margin={margin || '240px 0'}
                width={width || '50%'}
            />
        </S.StyledBackground>
    );
};
