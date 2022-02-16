import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { api } from '../api/transactions';
interface ITransaction {
    id: number;
    title: string;
    amount: number;
    category: string;
    type: string;
    createdAt: string;
}

type TransactionInput = Omit<ITransaction, 'id' | 'createdAt'>;


interface ITransactionContext {
    children: ReactNode
}

interface TransactionContextData {
    transactions: ITransaction[];
    createTransaction: (transaction: TransactionInput) => Promise<void>;
}



 const TransactionsContext = createContext<TransactionContextData>(
    {} as TransactionContextData
);

export function TransactionsProvider({ children }: ITransactionContext) {
    const [transactions, setTransactions] = useState<ITransaction[]>([]);

    useEffect(() => {
     api.get('transactions')
    .then(response => setTransactions(response.data.transactions))
    }, []);

    async function createTransaction(TransactionInput: TransactionInput) {

        const response = await api.post(`/transactions`, { ...TransactionInput, createdAt: new Date() });

        const { transaction } = response.data;

        console.log(transaction);

        setTransactions([
            ...transactions, transaction
        ])
    }

    return (
        <TransactionsContext.Provider value={{ transactions, createTransaction }}>
            {children}
        </TransactionsContext.Provider>
    )
}

export function useTransaction(){
    const context = useContext(TransactionsContext);
    return context
}