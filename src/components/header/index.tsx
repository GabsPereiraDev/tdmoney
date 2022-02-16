import { useState } from 'react';
import logoimg from '../../assets/logo.svg';
import { Container, Content } from './style';

interface IHeader {
    handleOpenTransactionModal: () => void
}

export function Header({handleOpenTransactionModal }:IHeader){


    return (
        <Container>
            <Content>
                <img src={logoimg} alt="dt money" />
                <button onClick={handleOpenTransactionModal}>
                    Nova transaçao
                </button>
            </Content>

        </Container>
    )
}