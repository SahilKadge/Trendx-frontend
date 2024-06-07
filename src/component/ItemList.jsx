import { useEffect, useState } from 'react';
import axios from 'axios';

const url = "http://localhost:5000/items";

function ItemList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(url);
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };
    fetchItems();
  }, []);

  return (
    <div className="item-list">
      {items.map(item => (
        <div key={item._id} className="item">
          <img src={item.myFile} alt={item.name} />
          <p>{item.image}</p>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
