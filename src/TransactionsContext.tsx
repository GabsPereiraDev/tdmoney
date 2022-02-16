import {createContext, ReactNode, useEffect, useState} from 'react'
import { api } from './api/transactions';

interface TransactionContextData{
    transactions: ITransaction[];
    createTransaction: (transaction: TransactionInput) => void;
}


interface ITransaction {
    id:number;
    title: string;
    amount: number;
    category: string;
    type: string;
    createdAt: string;
}

type TransactionInput = Omit<ITransaction, 'id' | 'createdAT'>;


interface ITransactionContext{
    children:ReactNode
}



export const TransactionsContext = createContext<TransactionContextData>(
    {} as TransactionContextData
    );

export function TransactionsProvider({children}:ITransactionContext){
    const [transactions, setTransactions] = useState<ITransaction[]>([]);

    useEffect(() => {
        const response = api.get('transactions')
            .then(response => setTransactions(response.data.transactions))
    }, []);

    function createTransaction(transaction:TransactionInput){
        
        api.post(`/transactions`, transaction)
    }

    return (
        <TransactionsContext.Provider value={{transactions, createTransaction}}>
            {children}
        </TransactionsContext.Provider>
    )
}