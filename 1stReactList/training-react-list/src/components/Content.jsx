
import ItemList from './ItemList';
// import { useState } from "react";


const Content = ({handleDelete, items, handleCheck,handleDeleteAll, handleFocusAll, handleUnFocusAll}) => {

    



    return (
        <>
            {items.length === 0 ? (
                <p className='empty'>List is empty</p> 
            ) : (
                <ItemList 
                    handleFocusAll={handleFocusAll}
                    handleDelete={handleDelete}
                    handleCheck={handleCheck}
                    items={items}
                    handleDeleteAll={handleDeleteAll}
                    handleUnFocusAll={handleUnFocusAll}
                />
            )}
        </>
    )
}

export default Content;  