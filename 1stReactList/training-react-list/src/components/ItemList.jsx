// import { FaTrashAlt } from 'react-icons/fa';
import LineItem from './LineItem';

const ItemList = ({handleCheck, handleDelete, items, handleDeleteAll, handleFocusAll, handleUnFocusAll}) => {
    return <ul>
        {items.map((item) => (
            <LineItem 
                key={item.id}
                item={item}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
                handleDeleteAll={handleDeleteAll}
            />
        ))}

        <div className="flexing">
            <button onClick={handleFocusAll}> Select All </button>
            <button onClick={handleUnFocusAll}> UnSelect All </button>
            <button onClick={handleDeleteAll}> Delete Selected </button>
        </div>
    </ul>
}

export default ItemList