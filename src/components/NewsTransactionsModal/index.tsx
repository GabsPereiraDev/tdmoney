import { Button, Container, TransactionTypeContainer } from "./style";
import { FormEvent,  useContext,  useState } from "react";
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg';
import { api } from './../../api/transactions';
import { TransactionsContext } from "../../TransactionsContext";

interface ModalProps {
    openModal: boolean;
    onCloseModal: () => void;
}

export function NewsTransactionsModal({
    openModal, onCloseModal
}: ModalProps) {

    const transactions = useContext(TransactionsContext)

    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('deposit');

    function handleCreateNewTransactions(event : FormEvent){
        event.preventDefault();

       
    }


    return (

        <Modal
            isOpen={openModal}
            onRequestClose={onCloseModal}
            overlayClassName='react-modal-overlay'
            className='react-modal-content'
        >
            <button type='button'>
                <img src={closeImg} alt="fechar modal" onClick={onCloseModal} className="react-modal-close" />
            </button>
            <Container onSubmit={handleCreateNewTransactions}>
                <h2>Cadastrar transação</h2>

                <input type="text"
                    placeholder="Titulo" 
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                    />

                <input type="number"
                    placeholder='valor' 
                    value={value}
                    onChange={(e)=>setValue(Number(e.target.value))}
                />

                <TransactionTypeContainer >
                    <Button 
                    type="button" 
                    onClick={() => setType('deposit')}
                    isActive={type === 'deposit'}
                    activeColor ='green'
                    >

                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>

                    </Button>
                    <Button 
                    type="button" 
                    onClick={() => setType('withdraw')}
                    isActive={type === 'withdraw'}
                    activeColor='red' 
                    >

                        <img src={outcomeImg} alt="Saida" />
                        <span>Saida</span>

                    </Button>
                </TransactionTypeContainer>



                <input type="text"
                    placeholder='Categoria' 
                    value={category}
                    onChange={(e)=>setCategory(e.target.value)}
                />

                <button type="submit">Cadastrar</button>

            </Container>
        </Modal>


    )
}