//useContext: Este hook permite que você acesse o contexto (context) de um componente. 
//É útil para passar dados e funções entre componentes sem a necessidade de passar props manualmente através da hierarquia de componentes


import React, { useContext } from 'react';
//Inicializando useContext
import NavBar from './NavBar';

//é criado um contexto utilizando React.createContext()
const MyContext = React.createContext();
function UseContext() {
    return (
        <MyContext.Provider value={'Dados do contexto Use-Context'}>
            <UseState />
        </MyContext.Provider>
    );


}
function UseState() {
    // Usando o hook useContext para acessar o contexto
    const contextData = useContext(MyContext);
    return <div>
        <NavBar />
        {contextData}</div>;
}
export default UseContext;