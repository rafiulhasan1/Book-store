import { createBrowserRouter } from "react-router";
import Root from './../components/Root/Root';
import ErrorPage from './../components/Root/ErrorPage/ErrorPage';
import Home from "../components/Root/Home/Home";
import BookDetails from "../components/Root/BookDetails/BookDetails";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'books/:bookId',
                element: <BookDetails />,
                loader: () => fetch("/booksData.json")
            }
        ]
    }
])

export default Router;