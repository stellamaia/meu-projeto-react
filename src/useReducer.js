//useReducer : É usado para gerenciar o estado complexo de um componente, especialmente quando este estado envolve múltiplas ações, 
//É semelhante ao 'useState', mas geralmente é preferido quando o estado precisa de lógica mais avançada para ser atualizado.
import React, { useReducer } from 'react';
//Inicializando useReducer
//inicializar variavel

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

function UseReducer(){
    const[state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <p>Contagem:{state.count}</p>
            <button onClick={() => dispatch({ type:'increment'})}>Incrementar</button>
            <button onClick={() => dispatch({ type:'decrement'})}>Descrementar</button>
        </div>
    )
}
export default UseReducer;