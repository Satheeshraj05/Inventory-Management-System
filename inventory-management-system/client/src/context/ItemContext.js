import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:5000/api/items');
      setItems(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch items');
    }
    setLoading(false);
  };

  const addItem = async (item) => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/api/items', item);
      setItems([...items, response.data]);
      setError(null);
    } catch (err) {
      setError('Failed to add item');
    }
    setLoading(false);
  };

  const updateItem = async (id, updatedItem) => {
    setLoading(true);
    try {
      const response = await axios.put(`http://localhost:5000/api/items/${id}`, updatedItem);
      setItems(items.map(item => item._id === id ? response.data : item));
      setError(null);
    } catch (err) {
      setError('Failed to update item');
    }
    setLoading(false);
  };

  const deleteItem = async (id) => {
    setLoading(true);
    try {
      await axios.delete(`http://localhost:5000/api/items/${id}`);
      setItems(items.filter(item => item._id !== id));
      setError(null);
    } catch (err) {
      setError('Failed to delete item');
    }
    setLoading(false);
  };

  return (
    <ItemContext.Provider value={{ items, loading, error, addItem, updateItem, deleteItem }}>
      {children}
    </ItemContext.Provider>
  );
};

