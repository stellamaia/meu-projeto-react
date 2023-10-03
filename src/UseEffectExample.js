
//useEffect: Este hook permite que você realize efeitos colaterais em componentes funcionais.
//Como buscar dados de uma API, manipular o DOM, ou assinar eventos.
// Ele é usado para substituir o ciclo de vida de componentes de classe componentDidMount, componentDidUpdate e componentWillUnmount.
import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';

//Usar algum efeito, fazer algo a partir de alguma ação nossa
function UseEffectExample() {

const [ count, setCount ] = useState(0);
const [ countB, setCountB ] = useState(10);

//inicializando o useEffect utilizando uma ação anonima 
// 1 - useEffect utilização
useEffect(() => {
console.log("Roda à cada renderização!")
});

// 2 - array de dependências
//Aguarda que o count seja alterado
useEffect(()=>{
    console.log("Só roda ao incrementar valor!");
},[count]);
// 3 - array de dependências vazio
// o UseEffect só vai ser executado quando a página carregar
console.log("Só executa uma vez!")

// 4 - clean up function - limpeza 
//O timer vai rodar quando o meu count mudar e vai mapear o número de click em 2 segundos
useEffect(() => {
    const timer = setTimeout(() =>{
        console.log(`O incrementador foi alterado ${count} vezes.`);

    }, 1000);
    return () =>{
        clearTimeout(timer);
    }
},[count]);


return (
    <div className='App'> 
       <NavBar />
    <div>
    <button onClick={() => setCount(prevCount => prevCount + 1)}>Renderizar</button>
        <p>{count}</p>

    </div>
    <div>
    <button onClick={() => setCountB(prevCount => prevCount + 1)}>Renderizar B</button>
        <p>{countB}</p>

    </div>
      
</div>
)
}

export default UseEffectExample;



// function UseEffectExample() {
//     const [currentTime, setCurrentTime] = useState(new Date());

//     useEffect(() => {
//         // Esta função será executada após a renderização inicial do componente

//         const intervalId = setInterval(() => {
//             // Atualiza o estado para a data e hora atual a cada segundo

//             setCurrentTime(new Date());
//         }, 1000);
//         // Retorne uma função de limpeza para interromper o intervalo quando o componente for desmontado
//         return () => {
//             clearInterval(intervalId);
//         };
        
//     },[]); // O array vazio como segundo argumento garante que o efeito seja executado apenas uma vez após a montagem inicial

//     return(
//         <div className='App'>
//             <h1>Relógio ao Vivo</h1>
//             <p>A data e hora atuais são:</p>
//             <p>{currentTime.toLocaleTimeString()}</p>

//         </div>
//     )


// }

// // export default UseEffectExample;
