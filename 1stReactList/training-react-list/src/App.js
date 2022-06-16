import './App.css';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import { useState , useEffect } from "react";
import AddItems from './components/AddItems';
import Search from './components/Search';
import apiReq from './components/apiReq';


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
  
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState(''); 
  const [fetchErr, setFetchErr] = useState(null);
  const [isLoading, setIsLoading] = useState(true);


  const API_URL = "http://localhost:3500/items";

//* posts and their commands
      // JSON.parse(localStorage.getItem("list")) ||
    const handleCheck = async (id) => {
      console.log(`${id}`);
      //! mapping items to setItem
      let itemList = items.map(item => item.id === id ? {
          ...item, checked: !item.checked
      } : item)
      setAndSaveItems(itemList)
      localStorage.setItem("list", JSON.stringify(itemList))

      const myItem = itemList.filter(item => item.id === id );
      const updateOptions = {
        method: 'PATCH',
        headers: {
          'Content-Type':'application/json'          
        },
        body: JSON.stringify({checked: myItem[0].checked})
      };
      const reqUrl = `${API_URL}/${id}`; 
      const result = await apiReq(reqUrl, updateOptions); 
      if (result) setFetchErr(result);
    }

    const handleDelete = async (id) => {
      let itemList = items.filter(item => item.id !== id);
      console.log(itemList);
      setAndSaveItems(itemList)

      const deleteOptions = {method: 'DELETE'};

      const reqUrl = `${API_URL}/${id}`; 

      const result = await apiReq(reqUrl , deleteOptions)
      if (result) setFetchErr(result);

    }
    const handleDeleteAll = () => {
        let itemList = items.filter(item => item.checked === false);
        console.log(itemList);
        setItems(itemList)
    }
    const handleFocusAll = () => {
        let itemList = items.map((item) => ({...item, checked: true}) );
        console.log(itemList);
        setItems(itemList)
    }
    const handleUnFocusAll = () => {
      let itemList = items.map((item) => ({...item, checked: false}) );
      console.log(itemList);
      setItems(itemList)
  }

//* input text for creation new post

    const handleSubmit = (e) => {
      e.preventDefault();
      if (!newItem) return;
      console.log("submitted");
      // setNewItem(addItem(newItem));
      addItem(newItem)
      setNewItem('')

    }

    const addItem = async (item) =>{
      const id = items.length ? items[items.length - 1].id + 1 : 1;
      console.log(id);
      let myNewItem = {id: id, checked: false, item: item,};
      console.log(myNewItem);
      let itemList = [...items, myNewItem];
      setAndSaveItems(itemList)

      const postOptions = {
        method: 'POST',
        headers: {
          'Content-Type':'application/json'
        },
        body: JSON.stringify(myNewItem)
      }
      const result = await apiReq(API_URL, postOptions)
      if (result) setFetchErr(result);
    }


    
    const setAndSaveItems = (itemList) =>{
      setItems(itemList)
      localStorage.setItem("list", JSON.stringify(itemList))
    }

//* effect

  useEffect(() => { 
    const fetchItems =  async () =>{
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error('Server error');
        const itemList = await response.json();
        setItems(itemList); 
        setFetchErr(null);
      } catch (error) {
        setFetchErr(error.message);
      } finally {
        setIsLoading(false)
      }
    }
    console.log('log by useEffect');

    setTimeout(() => {
      fetchItems();      
    }, 2000);

  }, [])


  return (
    <div className="App">
      <Header />
      <Search search={search} setSearch={setSearch} />
      <AddItems
        newItem = {newItem}
        handleSubmit = {handleSubmit}
        setNewItem={setNewItem}
      />
      <main>
        {isLoading && <p style={{color: "lightgreen", verticalAlign: "center"}}>Wait please, loading... </p>}
        {fetchErr && <p style={{color: "red"}}> {`Server error: ${fetchErr}`} </p>}
        {!fetchErr && !isLoading && <Content 
          items={items.filter( item=> ((item.item).toLowerCase().includes(search.toLowerCase()) ))}
          
          handleCheck = {handleCheck}
          handleDelete = {handleDelete}
          handleFocusAll = {handleFocusAll}
          handleDeleteAll = {handleDeleteAll}
          handleUnFocusAll ={handleUnFocusAll}
        />}
      </main>
      <Footer length={items.length}/>
    </div>
  );
}

export default App;
