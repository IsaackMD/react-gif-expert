import { useState } from "react";
import { AddCategories } from "./components/AddCategories";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState([]);

    const onAddCategory = (newCategory) => {
        // Validar si la categoría ya existe o si está vacía
        if (!newCategory.trim() || categories.includes(newCategory.trim())) return;

        // Añadir la nueva categoría como string
        setCategories([newCategory.trim(), ...categories]);
    };

    return (
        <>
            <h1>Gif Expert APP</h1>
            {/* Pasar la función como prop al componente AddCategories */}
            <AddCategories onNewCategory={onAddCategory} />


            {
                categories.map((category) => (
                    <GifGrid category={category} key={category}></GifGrid>
                ))
            }
        </>
    );
};
