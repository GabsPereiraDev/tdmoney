import { useContext, useEffect, useState } from 'react';
import { api } from '../../api/transactions';
import { useTransaction } from '../../hooks/useTransaction';

import { Container } from './style';




export function TransactionsTable() {
    const {transactions} = useTransaction()

  


    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(e => {
                        return (
                            <tr key={e.id}>
                                <td>{e.title}</td>
                                <td className={e.type}>{new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(e.type == 'deposit'? e.amount : -e.amount)}
                                </td>
                                <td>{e.category}</td>
                                <td>{new Intl.DateTimeFormat('pt-BR').format(new Date(e.createdAt))}</td>
                            </tr>
                        )
                    })}


                </tbody>
            </table>
        </Container>
    )
}