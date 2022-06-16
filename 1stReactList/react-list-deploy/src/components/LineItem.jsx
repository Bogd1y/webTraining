import { FaTrashAlt } from 'react-icons/fa';


const LineItem = ({handleCheck, handleDelete, item, handleDeleteAll}) =>{
    return (
        <li className="item" >
            <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleCheck(item.id)}
            />
            <label
            // ! style trinary expression
                style={(item.checked) ? {textDecoration: 'line-through'} : null}
                onDoubleClick={() => handleCheck(item.id)}
            >{item.item}</label> 
            <FaTrashAlt aria-label='Delete'
                role="button" tabIndex="0" onClick={() =>handleDelete(item.id)}
            />
        </li>
    )
}
export default LineItem;