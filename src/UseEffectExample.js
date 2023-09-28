import React, { useState, useEffect } from 'react';


function UseEffectExample() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        // Esta função será executada após a renderização inicial do componente

        const intervalId = setInterval(() => {
            // Atualiza o estado para a data e hora atual a cada segundo

            setCurrentTime(new Date());
        }, 1000);
        // Retorne uma função de limpeza para interromper o intervalo quando o componente for desmontado
        return () => {
            clearInterval(intervalId);
        };
        
    },[]); // O array vazio como segundo argumento garante que o efeito seja executado apenas uma vez após a montagem inicial

    return(
        <div className='App'>
            <h1>Relógio ao Vivo</h1>
            <p>A data e hora atuais são:</p>
            <p>{currentTime.toLocaleTimeString()}</p>

        </div>
    )


}

export default UseEffectExample;
