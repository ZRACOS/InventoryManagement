// src/components/InventoryItem.js
import React, { useState } from 'react';

function InventoryItem({ item, onUpdateItem, onDeleteItem }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedItem, setEditedItem] = useState(item);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onUpdateItem(editedItem);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedItem({ ...editedItem, [name]: name === 'quantity' ? parseInt(value) : name === 'price' ? parseFloat(value) : value });
  };

  return (
    <div className="inventory-item">
      {isEditing ? (
        <>
          <input
            type="text"
            name="name"
            value={editedItem.name}
            onChange={handleChange}
          />
          <input
            type="number"
            name="quantity"
            value={editedItem.quantity}
            onChange={handleChange}
          />
          <input
            type="number"
            name="price"
            value={editedItem.price}
            onChange={handleChange}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <h3>{item.name}</h3>
          <p>Quantity: {item.quantity}</p>
          <p>Price: ${item.price}</p>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => onDeleteItem(item.id)}>Delete</button>
        </>
      )}
    </div>
  );
}

export default InventoryItem;