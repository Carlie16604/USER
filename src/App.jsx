import { useState, useEffect } from 'react'
import "./App.css"

function App() {
const [user, setUser] = useState([]);
const [hash, setHash] = useState(window.location.hash.slice(1)*1);

useEffect(()=> {
  const fetchData = async() => {
      const response = await fetch("https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users");
      const json = await response.json();
      setUser(json);
    }
    fetchData();
  }, []);

  useEffect(()=> {
    window.addEventListener('hashchange', ()=>{
      setHash(window.location.hash.slice(1)*1);
    });
  }, [hash]);

  return (
    <>
      <h1>A... User! ({user.length})</h1>
      <hr />
      <ul>
        {
          user.map(sam => {

            return (
            <li key={sam.id} className={sam.id === hash ? 'selected': ''}>
              <a href={`#${sam.id === hash ? '': sam.id}`}>
                { sam.name }
              </a>
                <div>
                  <p>{sam.id === hash ? sam.email: null}</p>
                  <p>{sam.id === hash ? sam.company.name: null}</p>
                  <p>{sam.id === hash ? sam.phone: null}</p>
                </div>
            </li>
            );
          })
        }
      </ul>
    </>
  )
}

export default App
