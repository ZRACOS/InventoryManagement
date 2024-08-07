// src/components/InventoryList.js
import React from 'react';
import InventoryItem from './InventoryItem';

function InventoryList({ items, onUpdateItem, onDeleteItem }) {
  return (
    <div className="inventory-list">
      {items.map(item => (
        <InventoryItem 
          key={item.id} 
          item={item} 
          onUpdateItem={onUpdateItem}
          onDeleteItem={onDeleteItem}
        />
      ))}
    </div>
  );
}

export default InventoryList;