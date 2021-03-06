import {useContext} from 'react'
import IncomeImg from '../../assets/income.svg'
import OutComeImg from '../../assets/outcome.svg'
import TotalImg from '../../assets/total.svg'
import { useTransaction } from '../../hooks/useTransaction'
import {Container} from './style'


export function Summary(){


    const {transactions} = useTransaction()

    const summary = transactions.reduce((acc, transaction) =>{
        if(transaction.type === 'deposit'){
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;
        }
        if(transaction.type === 'withdraw'){
            acc.withdraws -= transaction.amount
            acc.total -= transaction.amount
        }
        return acc
    },{
        deposits:0,
        withdraws:0,
        total:0,
    })

   




    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={IncomeImg} alt="Entradas" />
                </header>
                <strong>{new Intl.NumberFormat('pt-BR', {
                    style:'currency',
                    currency:"BRL"
                }).format(summary.deposits)}</strong>
            </div>
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={OutComeImg} alt="Entradas" />
                </header>
                <strong>{new Intl.NumberFormat('pt-BR',{
                    style:'currency',
                    currency: 'BRL'
                }).format(summary.withdraws)}</strong>
            </div>
            <div className='highlight-background'>
                <header>
                    <p>Total</p>
                    <img src={TotalImg} alt="Entradas" />
                </header>
                <strong>{new Intl.NumberFormat('pt-BR',{
                    style:'currency',
                    currency:'BRL'
                }).format(Number(summary.total))}</strong>
            </div>
        </Container>
    )
}