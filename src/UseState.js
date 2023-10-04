// Importa os módulos React e useState do React
import React, { useState } from 'react';
import NavBar from './NavBar';

// Define o componente UseState como uma função
function UseState() {
    // Define três estados usando o hook useState: 'todos', 'task' e 'showAlert'
    const [todos, setTodos] = useState([]); // Armazena a lista de tarefas
    const [task, setTask] = useState(''); // Armazena a tarefa atual
    const [showAlert, setShowAlert] = useState(false); // Controla a exibição de um alerta

    // Função para lidar com a mudança no input de tarefa
    const handleTaskChange = (event) => {
        setTask(event.target.value);
    };

    // Função para adicionar uma nova tarefa à lista
    const addTodo = () => {
        if (task.trim() === '') {
            setShowAlert(true); // Mostra um alerta se a tarefa estiver vazia
        } else {
            const newTodos = [...todos, task]; // Cria uma nova lista de tarefas com a tarefa atual
            setTodos(newTodos); // Atualiza o estado 'todos'
            setTask(''); // Limpa o campo de entrada
            setShowAlert(false); // Esconde o alerta
        }
    };

    // Função para remover uma tarefa da lista
    const removeTodo = (index) => {
        const newTodos = [...todos]; // Cria uma cópia da lista de tarefas
        newTodos.splice(index, 1); // Remove a tarefa com o índice especificado
        setTodos(newTodos); // Atualiza o estado 'todos'
    };

    // Renderiza o componente UseState
    return (
        <div className='content-todo'>

            <NavBar />

            <div className='content'>
                <h1 className='title'>Lista de Tarefas</h1>
                <input
                    className='input'
                    type="text"
                    label="Adicionar tarefa"
                    value={task}
                    onChange={handleTaskChange} // Chama a função handleTaskChange quando o input muda
                />

                <button variant="contained" className='button-add' onClick={addTodo}>
                    Adicionar
                </button>

                {todos.length === 0 ? (
                    <p className='listDescription'>A lista de tarefas está vazia.</p>
                ) : (
                    <ul className='list'>
                        {todos.map((todo, index) => (
                            <li key={index}>
                                {todo} <button className='button-click' onClick={() => removeTodo(index)}>Remover</button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

// Exporta o componente UseState para ser usado em outros lugares
export default UseState;
