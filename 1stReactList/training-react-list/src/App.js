import './App.css';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import { useState } from "react";
import AddItems from './components/AddItems';
import Search from './components/Search';

// [
//   {
//       id: 1,
//       checked: false,
//       item: "One Item  "
//   },
//   {
//       id: 2,
//       checked: false,
//       item: "Item 2"
//   },
//   {
//       id: 3,
//       checked: false,
//       item: "Item 3"
//   }
// ][
//       {
//           id: 1,
//           checked: false,
//           item: "One Item  "
//       },
//       {
//           id: 2,
//           checked: false,
//           item: "Item 2"
//       },
//       {
//           id: 3,
//           checked: false,
//           item: "Item 3"
//       }
//     ]
const App = () => {
  //* posts and their commands
    const [items, setItems] = useState(JSON.parse(localStorage.getItem("list")));
    const handleCheck = (id) => {
      console.log(`${id}`);
      //! mapping items to setItem , because can't change true state, better way is map
      let itemList = items.map(item => item.id === id ? {
          ...item, checked: !item.checked
      } : item)
      setAndSaveItems(itemList)
      localStorage.setItem("list", JSON.stringify(itemList))
    }
    const handleDelete = (id) => {
      let itemList = items.filter(item => item.id !== id);
      console.log(itemList);
      setAndSaveItems(itemList)
      
    }
    const handleDeleteAll = () => {
        let itemList = items.filter(item => item.checked === false);
        console.log(itemList);
        setItems(itemList)
    }
    const handleFocusAll = () => {
        // let itemList = items.map((item) => ({...item, checked: !item.checked}) );
        let itemList = items.map((item) => ({...item, checked: true}) );
        // let itemList = items.map(item => item.checked ?  {...item, checked: !true} : {...item, checked: true})
        console.log(itemList);
        setItems(itemList)
    }
    const handleUnFocusAll = () => {
      // let itemList = items.map((item) => ({...item, checked: !item.checked}) );
      let itemList = items.map((item) => ({...item, checked: false}) );
      // let itemList = items.map(item => item.checked ?  {...item, checked: !true} : {...item, checked: true})
      console.log(itemList);
      setItems(itemList)
  }
    
  //* input text for creation new post
    const [newItem, setNewItem] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      if (!newItem) return;
      console.log("submitted");
      // setNewItem(addItem(newItem));
      addItem(newItem)
      setNewItem('')

    }

    const addItem = (item) =>{
      const id = items.length ? items[items.length - 1].id + 1 : 1;
      console.log(id);
      let myNewItem = {id: id, checked: false, item: item,};
      console.log(myNewItem);
      let itemList = [...items, myNewItem];
      setAndSaveItems(itemList)
    }

//* search
    const [search, setSearch] = useState(''); 


    const setAndSaveItems = (itemList) =>{
      setItems(itemList)
      localStorage.setItem("list", JSON.stringify(itemList))
    }

  return (
    <div className="App">
      <Header />
      <Search search={search} setSearch={setSearch}/>
      <AddItems
        newItem = {newItem}
        handleSubmit = {handleSubmit}
        setNewItem={setNewItem}
        // addItem={addItem}
      />
      <Content 
        items={items.filter( item=> ((item.item).toLowerCase().includes(search.toLowerCase()) ))}
         
        // setItems={setItems}
        handleCheck = {handleCheck}
        handleDelete = {handleDelete}
        handleFocusAll = {handleFocusAll}
        handleDeleteAll = {handleDeleteAll}
        handleUnFocusAll ={handleUnFocusAll}
      />
      <Footer length={items.length}/>
    </div>
  );
}

export default App;
