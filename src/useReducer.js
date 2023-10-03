//useReducer : É usado para gerenciar o estado complexo de um componente, especialmente quando este estado envolve múltiplas ações, 
//É semelhante ao 'useState', mas geralmente é preferido quando o estado precisa de lógica mais avançada para ser atualizado.
import React, { useReducer } from 'react';
//Inicializando useReducer
//inicializar variavel
import NavBar from './NavBar';

const initialState = { count: 0 };

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            return state;
    }

}

function UseReducer() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const rootStyle = {
        display: 'flex',
        justifyContent: 'center',
        position:'absolute',
        top:'200px',
    }
    const containerStyle = {
        margin: '10px',
        padding: '10px',
        border: '1px solid red',
        borderRadius: '5px',
        textAlign: 'center',
        width:'70%',
        
    }
    const textStyle = {

        fontSize: '30px',
        textAlign: 'center',
    }
    const buttonStyleIncrement = {
        margin: '5px',
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: 'blue',
        color: 'white',
        borderRadius: '4px',
        cursor: 'pointer',
        
   
    };
    const buttonStyleDecrement = {
        margin: '5px',
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: 'red',
        color: 'white',
        borderRadius: '4px',
        cursor: 'pointer',
    };
    
    return (
        <div>
        <NavBar />
        <div style={rootStyle}>
      
        <div style={containerStyle}>
            
            <p style={textStyle}>Contagem:{state.count}</p>
            <button style={buttonStyleIncrement} onClick={() => dispatch({ type: 'increment' })}>Incrementar</button>
            <button style={buttonStyleDecrement} onClick={() => dispatch({ type: 'decrement' })}>Descrementar</button>
        </div>
        </div>
        </div>
    )
}
export default UseReducer;
