import {useContext} from 'react'
import IncomeImg from '../../assets/income.svg'
import OutComeImg from '../../assets/outcome.svg'
import TotalImg from '../../assets/total.svg'
import { TransactionsContext } from '../../TransactionsContext'
import {Container} from './style'


export function Summary(){


    const data = useContext(TransactionsContext)


    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={IncomeImg} alt="Entradas" />
                </header>
                <strong>R$1000,000</strong>
            </div>
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={OutComeImg} alt="Entradas" />
                </header>
                <strong>- R$500,000</strong>
            </div>
            <div className='highlight-background'>
                <header>
                    <p>Total</p>
                    <img src={TotalImg} alt="Entradas" />
                </header>
                <strong>R$500,000</strong>
            </div>
        </Container>
    )
}