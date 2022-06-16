import './App.css';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import { useState, useEffect } from "react";
import AddItems from './components/AddItems';
import Search from './components/Search';
// import apiReq from './components/apiReq';

const App = () => {

  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');
  const [fetchErr, setFetchErr] = useState(null);
  const [isLoading, setIsLoading] = useState(true);


  // const API_URL = "http://localhost:3500/items";

  //* posts and their commands
  const handleCheck = async (id) => {
    let itemList = items.map(item => item.id === id ? {
      ...item, checked: !item.checked
    } : item)
    setAndSaveItems(itemList)
    localStorage.setItem("list", JSON.stringify(itemList))
  }

  const handleDelete = async (id) => {
    let itemList = items.filter(item => item.id !== id);
    setAndSaveItems(itemList)

  }
  const handleDeleteAll = () => {
    let itemList = items.filter(item => item.checked === false);
    setItems(itemList)
  }
  const handleFocusAll = () => {
    let itemList = items.map((item) => ({ ...item, checked: true }));
    setItems(itemList)
  }
  const handleUnFocusAll = () => {
    let itemList = items.map((item) => ({ ...item, checked: false }));
    setItems(itemList)
  }

  //* input text for creation new post

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem)
    setNewItem('')

  }

  const addItem = async (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;

    let myNewItem = { id: id, checked: false, item: item, };
    let itemList = [...items, myNewItem];

    setAndSaveItems(itemList)
    JSON.stringify(myNewItem)
  }



  const setAndSaveItems = (itemList) => {
    setItems(itemList)
    localStorage.setItem("list", JSON.stringify(itemList))
  }

  //* effect

  useEffect(() => {
    const fetchItems = async () => {
      try {

        setItems(JSON.parse(localStorage.getItem("list")));
        setFetchErr(null);
      } catch (error) {
        setFetchErr(error.message);
      } finally {
        setIsLoading(false)
      }
    }

    setTimeout(() => {
      fetchItems();
    }, 2000);

  }, [])


  return (
    <div className="App">
      <Header />
      <Search search={search} setSearch={setSearch} />
      <AddItems
        newItem={newItem}
        handleSubmit={handleSubmit}
        setNewItem={setNewItem}
      />
      <main>
        {isLoading && <p style={{ color: "lightgreen", verticalAlign: "center" }}>Wait please, loading... </p>}
        {fetchErr && <p style={{ color: "red" }}> {`Server error: ${fetchErr}`} </p>}
        {!fetchErr && !isLoading && <Content
          items={items.filter(item => ((item.item).toLowerCase().includes(search.toLowerCase())))}

          handleCheck={handleCheck}
          handleDelete={handleDelete}
          handleFocusAll={handleFocusAll}
          handleDeleteAll={handleDeleteAll}
          handleUnFocusAll={handleUnFocusAll}
        />}
      </main>
      <Footer length={items.length} />
    </div>
  );
}

export default App;
