import { useState } from "react";

export const AddCategories = ({ onNewCategory }) => {
    const [textState, setTextState] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (textState.trim() === '') return; // Evita añadir valores vacíos
        onNewCategory(textState.trim()); // Llama a la función recibida por props
        setTextState(''); // Limpia el campo de entrada
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={textState}
                onChange={(e) => setTextState(e.target.value)}
                placeholder="Buscar GIFs"
                aria-label="Buscar GIFs"
            />
            <button type="submit" disabled={textState.trim() === ''} >
                Añadir
            </button>
        </form>
    );
};
