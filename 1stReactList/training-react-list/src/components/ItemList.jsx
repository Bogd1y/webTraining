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
                // <li className="item" key={item.id}>
                //     <input
                //         type="checkbox"
                //         checked={item.checked}
                //         onChange={() => handleCheck(item.id)}
                //     />
                //     <label
                //     // ! style trinary expression
                //         style={(item.checked) ? {textDecoration: 'line-through'} : null}
                //         onDoubleClick={() => handleCheck(item.id)}
                //     >{item.item}</label> 
                //     <FaTrashAlt
                //      role="button" tabIndex="0" onClick={() =>handleDelete(item.id)}
                //     />
                // </li>
        ))}

        <div className="flexing">
            <button onClick={handleFocusAll}> Select All </button>
            <button onClick={handleUnFocusAll}> UnSelect All </button>
            <button onClick={handleDeleteAll}> Delete Selected </button>
        </div>
    </ul>
}

export default ItemList