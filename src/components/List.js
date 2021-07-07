import React from 'react';

//import component
import Itemns from './Itemns';

function List({ items, setItems }) {
    return (
        <div className="list-container">
            <ul className="items-list" style={{padding:"0", listStyleType:"none"}}>
                {items.map((it) => (
                    <Itemns item={it} items={items} setItems={setItems} contentx={it.text} />
                ))}
            </ul>
        </div>
    );
}

export default List