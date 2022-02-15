import { Dashboard } from "./components/Dashboard/indext";
import { Header } from "./components/header";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
        <Header/>
        <Dashboard/>
        <GlobalStyle/>
    </>
  );
}
