import { useEffect } from 'react';
import { api } from '../../api/transactions';
import { Container } from './style';

export function TransactionsTable() {

    useEffect (()=>{
        const response = api.get('transactions')
        console.log(response)
    },[])



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
                    <tr>
                        <td>aluguel</td>
                        <td className='withdraw'> - R$1.000</td>
                        <td>casa</td>
                        <td>20/02/2022</td>
                    </tr>
                    <tr >
                        <td>Desenvolvimento de website</td>
                        <td className='deposit'>R$12.000</td>
                        <td>Desenvolviment</td>
                        <td>20/05/2022</td>
                    </tr>
             
                </tbody>
            </table>
        </Container>
    )
}