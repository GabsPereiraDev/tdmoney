import { Dashboard } from "./components/Dashboard/indext";
import { Header } from "./components/header";
import { GlobalStyle } from "./styles/global";
import { NewsTransactionsModal } from "./components/NewsTransactionsModal";
import { useState } from "react";
import Modal from 'react-modal';
import { TransactionsProvider } from "./hooks/useTransaction";

Modal.setAppElement('#root');

export function App() {

  const [isNewTransactionOpen, setIsNewTransactionOpen] = useState(false);

    function handleOpenTransactionModal() {
        setIsNewTransactionOpen(true)
    };
    function handleCloseTransactionModal() {
        setIsNewTransactionOpen(false)
    };

  return (
    <TransactionsProvider>
      <Header  handleOpenTransactionModal={handleOpenTransactionModal}/>
      <Dashboard />
      <GlobalStyle />
      <NewsTransactionsModal onCloseModal={handleCloseTransactionModal} openModal={isNewTransactionOpen}/>
    </TransactionsProvider>
  );
}
