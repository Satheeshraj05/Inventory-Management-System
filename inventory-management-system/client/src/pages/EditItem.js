import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ItemContext } from '../context/ItemContext';

const EditItem = () => {
    const { id } = useParams();
    const { items, updateItem } = useContext(ItemContext);
    const navigate = useNavigate();

    const [item, setItem] = useState({
        itemName: '',
        quantity: '',
        price: '',
        description: '',
        category: '',
    });

    useEffect(() => {
        const itemToEdit = items.find(item => item._id === id);
        if (itemToEdit) {
            setItem(itemToEdit);
        }
    }, [id, items]);

    const handleChange = (e) => {
        setItem({ ...item, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateItem(id, item);
        navigate('/');
    };

    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-2xl font-bold mb-4">Edit Item</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="itemName" className="block mb-1">Item Name</label>
                    <input
                        type="text"
                        id="itemName"
                        name="itemName"
                        value={item.itemName}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="quantity" className="block mb-1">Quantity</label>
                    <input
                        type="number"
                        id="quantity"
                        name="quantity"
                        value={item.quantity}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="price" className="block mb-1">Price</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={item.price}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                        step="0.01"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="description" className="block mb-1">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        value={item.description}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                    />
                </div>
                <div>
                    <label htmlFor="category" className="block mb-1">Category</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        value={item.category}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Update Item
                </button>
            </form>
        </div>
    );
};

export default EditItem;