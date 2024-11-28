import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ItemContext } from '../context/ItemContext';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import ConfirmDialog from '../components/ConfirmDialog';
import Pagination from '../components/Paginaton';
// import LoadingSpinner from '../components/LoadingSpinner';
// import ErrorMessage from '../components/ErrorMessage';
// import ConfirmDialog from '../components/ConfirmDialog';
// import Pagination from '../components/Pagination';

const ItemList = () => {
    const { items, deleteItem, loading, error } = useContext(ItemContext);
    const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, itemId: null });
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

    const handleDeleteClick = (itemId) => {
        setConfirmDialog({ isOpen: true, itemId });
    };

    const handleConfirmDelete = () => {
        if (confirmDialog.itemId) {
            deleteItem(confirmDialog.itemId);
            setConfirmDialog({ isOpen: false, itemId: null });
        }
    };

    if (loading) return <LoadingSpinner />;
    if (error) return <ErrorMessage message={error} />;

    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <h1 className="text-2xl font-bold mb-4 p-4 bg-gray-50">Inventory Items</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {currentItems.map(item => (
                            <tr key={item._id}>
                                <td className="px-6 py-4 whitespace-nowrap">{item.itemName}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{item.quantity}</td>
                                <td className="px-6 py-4 whitespace-nowrap">${item.price.toFixed(2)}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{item.category}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    <Link to={`/edit/${item._id}`} className="text-indigo-600 hover:text-indigo-900 mr-4">Edit</Link>
                                    <button
                                        onClick={() => handleDeleteClick(item._id)}
                                        className="text-red-600 hover:text-red-900"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(items.length / itemsPerPage)}
                onPageChange={setCurrentPage}
            />
            <ConfirmDialog
                isOpen={confirmDialog.isOpen}
                onClose={() => setConfirmDialog({ isOpen: false, itemId: null })}
                onConfirm={handleConfirmDelete}
                message="Are you sure you want to delete this item?"
            />
        </div>
    );
};

export default ItemList;

