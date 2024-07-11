import React, { useState, useEffect } from 'react';
import '/Users/new/Desktop/hooked/src/componet/Catagories/Catagories.css';

const Categories = ({ chooseCategory }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        setCategories([
            {
                key: 'all',
                name: 'Всё'
            },
            {
                key: 'Costume',
                name: 'Костюм'
            },
            {
                key: 'Technique',
                name: 'Техника'
            }
        ]);
    }, []);

    return (
        <div className='categories'>
            {categories.map(el => (
                <div key={el.key} onClick={() => chooseCategory(el.key)}>
                    {el.name}
                </div>
            ))}
        </div>
    );
}

export default Categories;
