import React from 'react';

function Categories({ filter, categories }) {
    return (
        <nav className="sidenav">
            <ul>
                {
                    categories.map((cat, i) => {
                        return (
                            <li key={i}>
                                <a onClick={() => filter(cat)}><img src={`./skills/${cat}.svg`} alt={cat}/></a>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default Categories;