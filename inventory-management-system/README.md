# Inventory Management System Documentation

## Table of Contents
- [Project Setup](#project-setup)
- [System Architecture](#system-architecture)
- [API Documentation](#api-documentation)
- [User Guide](#user-guide)

## Project Setup

### Prerequisites
- Node.js (v14 or higher)
- npm (Node Package Manager)
- MongoDB installed and running locally

### Installation Steps

1. The project repository:
```bash

cd inventory-management-system
```

2. Set up the backend:
```bash
cd server
npm install
```

3. Set up the frontend:
```bash
cd client
npm install
```

4. Install Tailwind CSS and its dependencies:
```bash
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
npx tailwindcss init -p
```

5. Create a `.env` file in the server directory with the following variables:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/inventory
```

6. Start the development servers:
```bash
# In the server directory
npm run dev

# In the client directory (new terminal)
npm start
```

## System Architecture

### Overview
The Inventory Management System follows a client-server architecture with three main layers:

1. **Frontend (React.js)**
   - Built with React.js and styled using Tailwind CSS
   - Components organized in a modular structure
   - Uses Context API for state management
   - Implements responsive design for various screen sizes

2. **Backend (Node.js/Express)**
   - RESTful API built with Express.js
   - Handles business logic and data validation
   - Manages database operations
   - Implements error handling and input validation

3. **Database (MongoDB)**
   - Stores inventory items and related data
   - Uses Mongoose for object modeling
   - Implements schema validation

### Component Structure

```
client/
├── src/
│   ├── components/
│   │   ├── LoadingSpinner.js
│   │   ├── ErrorMessage.js
│   │   ├── ConfirmDialog.js
│   │   └── Pagination.js
│   ├── context/
│   │   └── ItemContext.js
│   ├── pages/
│   │   ├── ItemList.js
│   │   ├── AddItem.js
│   │   └── EditItem.js
│   └── App.js
```

## API Documentation

### Items Endpoints

#### GET /api/items
Retrieves all inventory items.

**Response (200 OK)**
```json
[
  {
    "_id": "string",
    "name": "string",
    "description": "string",
    "quantity": "number",
    "price": "number",
    "createdAt": "date",
    "updatedAt": "date"
  }
]
```

#### POST /api/items
Creates a new inventory item.

**Request Body**
```json
{
  "name": "string",
  "description": "string",
  "quantity": "number",
  "price": "number"
}
```

**Response (201 Created)**
```json
{
  "_id": "string",
  "name": "string",
  "description": "string",
  "quantity": "number",
  "price": "number",
  "createdAt": "date",
  "updatedAt": "date"
}
```

#### PUT /api/items/:id
Updates an existing inventory item.

**Request Body**
```json
{
  "name": "string",
  "description": "string",
  "quantity": "number",
  "price": "number"
}
```

**Response (200 OK)**
```json
{
  "_id": "string",
  "name": "string",
  "description": "string",
  "quantity": "number",
  "price": "number",
  "updatedAt": "date"
}
```

#### DELETE /api/items/:id
Deletes an inventory item.

**Response (200 OK)**
```json
{
  "message": "Item deleted successfully"
}
```

## User Guide

### Managing Inventory Items

#### Viewing Items
1. Navigate to the home page to see the list of all inventory items
2. Use the pagination controls at the bottom to navigate through items
3. Items are displayed in a table showing name, description, quantity, and price

#### Adding New Items
1. Click the "Add Item" button at the top of the item list
2. Fill in the required information:
   - Name
   - Description
   - Quantity
   - Price
3. Click "Save" to add the item to inventory

#### Editing Items
1. Find the item you want to edit in the list
2. Click the "Edit" button (pencil icon) next to the item
3. Update the information as needed
4. Click "Save" to update the item

#### Deleting Items
1. Locate the item you want to delete
2. Click the "Delete" button (trash icon)
3. Confirm the deletion in the confirmation dialog

### Additional Features

#### Loading States
- A loading spinner appears when data is being fetched or updated
- Provides visual feedback during API operations

#### Error Handling
- Error messages are displayed when operations fail
- Clear feedback helps identify and resolve issues

#### Confirmation Dialogs
- Prevents accidental deletion of items
- Requires explicit confirmation for destructive actions

#### Pagination
- Navigate through large sets of items
- Configurable items per page (default: 10)