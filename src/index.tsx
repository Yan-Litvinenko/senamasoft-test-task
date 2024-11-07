import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { TodoList } from './pages/todoList/TodoList';
import { Provider } from 'react-redux';
import { AddPage } from './pages/add/AddPage';
import { store } from './redux/store';
import './css/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root')!);

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route index element={<TodoList />} />
            <Route path="/add" element={<AddPage />} />
        </Route>,
    ),
);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>,
);
