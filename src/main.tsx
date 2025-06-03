import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";
import Login from './pages/Login.tsx'
import Register from './pages/Register.tsx'
import Header from './components/Header.tsx'
import Home from './pages/Home.tsx'
import Profile from './pages/Profile.tsx'
import Quiz from './pages/Quiz.tsx';
import ViewWord from './pages/ViewWord.tsx';
import EditWord from './pages/EditWord.tsx';
import { ThemeProvider } from './components/theme-provider.tsx';
import QuizResults from './pages/QuizResults.tsx'

const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        Component: Header,
        children: [
            { path: '/', Component: Home },
            { path: '/profile', Component: Profile },
            { path: '/quiz',
                loader: async({params}) => {
                    const vocabularies = [
                        {
                            title: "entitlement",
                            definition: "lorem ipsum",
                            examples: "yeah, yeassirhiskie",
                            word_id: params.id
                        },
                        {
                            title: "perpetual",
                            definition: "lorem ipsum",
                            examples: "yeah, yeassirhiskie",
                            word_id: params.id
                        },
                        {
                            title: "rendezvous",
                            definition: "lorem ipsum",
                            examples: "yeah, yeassirhiskie",
                            word_id: params.id
                        },
                    ]
                    return vocabularies
                },
                 Component: Quiz 
            },
            { path: '/quiz/:id',
                loader: async({params}) => {
                    
                },
                 Component: QuizResults
            },
            { path: '/word/:id', 
                loader: async ({params}) => {
                    const word = {
                        title: "title",
                        definition: "lorem ipsum",
                        examples: "yeah, yeassirhiskie",
                        word_id: params.id
                    }
                    return word
                },
                Component: ViewWord 
            },
            { path: '/word/:id/edit', 
                loader: async ({params}) => {
                    const word = {
                        title: "title",
                        definition: "lorem ipsum",
                        examples: "yeah, yeassirhiskie",
                        word_id: params.id
                    }
                    return word
                },
                Component: EditWord },
        ]
    }
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        {/* <App /> */}
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <RouterProvider router={router} />
        </ThemeProvider>

    </StrictMode>,
)
