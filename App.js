// src/App.js
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import InventoryList from './components/InventoryList';
import AddItemForm from './components/AddItemForm';
import './App.css';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem('inventoryItems')) || [];
    setItems(savedItems);
  }, []);

  useEffect(() => {
    localStorage.setItem('inventoryItems', JSON.stringify(items));
  }, [items]);

  const addItem = (newItem) => {
    setItems([...items, { ...newItem, id: Date.now() }]);
  };

  const updateItem = (updatedItem) => {
    setItems(items.map(item => item.id === updatedItem.id ? updatedItem : item));
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="App">
      <Header />
      <AddItemForm onAddItem={addItem} />
      <InventoryList items={items} onUpdateItem={updateItem} onDeleteItem={deleteItem} />
    </div>
  );
}

export default App;