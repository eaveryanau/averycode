import './App.css';
import {data} from "./data";
import {useEffect, useState} from "react";
import FlagItem from "./FlagItem";

function App() {

    const items = data;
    const timeout = 4000;
    const [activeNumber, setActiveNumber] = useState(0);

    const changeActiveElement = () => {
        setActiveNumber((activeNumber + 1 === items.length) ? 0 : activeNumber + 1);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            changeActiveElement();
        }, timeout);
        return () => clearInterval(interval);
    });

  return (
    <>
        {
            (items.map((item, index) => {
                return <FlagItem key={item.id} isActive={activeNumber === index} {...item} />
            }))
        }

      <div className="foot">©2023 by ave</div>
    </>
  );
}

export default App;
