
import { useState } from 'react';
import {Item} from './Item'; // Asegúrate de que el componente Item esté correctamente importado



export const PackingList = ({items, onDeleteItem, onToggleItem, onClearList}) => {
  
  const [sortBy, setSetsortBy] = useState("input")
  let sortedItems;

  if (sortBy==="input") sortedItems = items;
  if (sortBy==="description") sortedItems = items.slice().sort((a,b)=>a.description.localeCompare(b.description));
  if (sortBy==="packed") sortedItems = items.slice().sort((a,b)=>Number(a.packed) - (b.packed));

 
  
  return (
   <div className='list'>
      <ul>
        {sortedItems.map((item) => (
          <Item key={item.id} item={item} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} />
        ))}
      </ul>

      <div className='actions'>
        <select name="" id="" value={sortBy} onChange={ e=>setSetsortBy (e.target.value) }>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearList}>Clear List</button>


      </div>
   </div>
  );
};
