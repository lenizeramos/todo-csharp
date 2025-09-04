# 📝 Todo App (C# + React + MongoDB)

A simple **full-stack Todo application** built for learning purposes.  
The backend is written in **ASP.NET Core (C#)** with **MongoDB** as the database, and the frontend is built using **React + TypeScript**.

---

## 🚀 Features

- ➕ Add new tasks  
- ✏️ Edit existing tasks  
- 🗑️ Delete tasks  
- 📡 Full CRUD API with ASP.NET Core Web API  
- 🗃️ MongoDB persistence  

---

## 🛠️ Tech Stack

**Frontend**  
- React + TypeScript   
- `react-icons` for UI icons  

**Backend**  
- ASP.NET Core 8 Web API (C#)  
- MongoDB Driver for C#  
- RESTful API with CRUD operations  
- CORS enabled for React frontend  

**Database**  
- MongoDB 

---

## 📂 Project Structure

```
project-root/
│
├── backend/                # ASP.NET Core Web API
│   ├── Controllers/        # API controllers (TodoController.cs)
│   ├── Models/             # MongoDB data models (TodoItem.cs)
│   ├── Services/           # Business logic & MongoDB access (TodoService.cs)
│   ├── Settings/           # MongoDB settings class
│   ├── Program.cs          # Entry point and configuration
│   └── appsettings.json    # Configuration file
│
├── frontend/               # React + TypeScript app
│   ├── src/
│   │   ├── App.tsx         # Main Todo UI
│   │   └── index.tsx
│   └── package.json
│
└── README.md               # Project documentation
```

---

## ⚙️ Setup & Installation

### 1️⃣ Backend (C# + ASP.NET Core)

1. Navigate to the backend folder:
   ```bash
   cd backend
   ```

2. Create a file **`appsettings.json`** inside the backend folder with the following content:

   ```json
   {
     "MongoDbSettings": {
       "ConnectionString": "mongodb+srv://<username>:<password>@cluster0.nmint.mongodb.net/<databasename>?retryWrites=true&w=majority",
       "DatabaseName": "TodoDb"
     },
     "Logging": {
       "LogLevel": {
         "Default": "Information",
         "Microsoft.AspNetCore": "Warning"
       }
     },
     "AllowedHosts": "*"
   }
   ```

3. Run the backend API:
   ```bash
   dotnet run
   ```

- API will start at:  
  ```
  http://localhost:5006/api/todo
  ```

---

### 2️⃣ Frontend (React + TypeScript)

1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

- Frontend will start at:  
  ```
  http://localhost:5173
  ```

---

## 🌐 API Endpoints

| Method | Endpoint              | Description              |
|--------|----------------------|--------------------------|
| GET    | `/api/todo`          | Get all todos            |
| POST   | `/api/todo`          | Create a new todo        |
| PUT    | `/api/todo/{id}`     | Update an existing todo  |
| DELETE | `/api/todo/{id}`     | Delete a todo            |

---

## 📚 Learning Goals

This project was built as a study exercise to practice:  
- Writing a **REST API in C#**  
- Using **MongoDB with ASP.NET Core**  
- Building a **React + TypeScript frontend**  
- Connecting frontend and backend with **fetch API**  
