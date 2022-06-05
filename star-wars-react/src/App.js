import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import Header from './components/Header/Header';
import routesConfig from './routes/routesConfig';
import {} from './utils/network'



function App() {

  return (
    <div className="App">


      <BrowserRouter>
        <div className={styles.wrapper}>
          
          <Header />
          
          <Routes>
            {routesConfig.map((route, index) => (
                <Route
                    key={index}
                    path={route.path}
                    element={route.element}
                />
            ))}
          </Routes>
        </div>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
