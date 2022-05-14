import { useRef } from "react"
import { FaPlus } from "react-icons/fa"


const AddItems = ({newItem, handleSubmit, setNewItem,}) => {
    const inputRef = useRef();

    return (
      <form className="addForm" onSubmit={handleSubmit} >
        <label htmlFor="addItem"></label>
        <input
            ref={inputRef}
            autoFocus
            id="addItem"
            type="text"
            placeholder="Add item "
            required
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
        >
            
        </input>
        <button 
            type="submit"
            aria-label="Add Item"
            onClick={() => {inputRef.current.focus()}}
        >
            <FaPlus/>
        </button>    
      </form>
    )
}
  
export default AddItems