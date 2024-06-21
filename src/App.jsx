import { Logo } from "./Logo"
import { Form } from "./Form"
import { PackingList } from "./PackingList"
import { Stats } from "./Stats"
import { useState } from "react"




export const App = () => {

  const [items, setItems] = useState([]);
  


  const handleAddItems = (newItem) => {
    setItems([...items, newItem])
  }

  function handleDeleteItems(id) {
    setItems(items=>items.filter(item=>item.id !==id))
  }

  function handleToggleItem(id) {
    setItems((items)=> 
      items.map((item) => 
        item.id === id ? {...item, packed: !item.packed }
          : item
        )
      )
  }

  function clearList() {
    const confirmed = window.confirm("Are you sure you want to delete all items?")
    
    if (confirmed) setItems([])
  }
  
  


  return (
    
      <>
        <div className="app">
            <Logo />
            <Form onAddItems={handleAddItems} />
            <PackingList items={items} onDeleteItem={handleDeleteItems} onToggleItem={handleToggleItem} onClearList={clearList} />
            <Stats items={items} />
        </div>
      </>
    
  )
}





