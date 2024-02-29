import { Route, Routes } from 'react-router-dom'
import Content from './Content'
import Main from '../layouts/Main'

export default function BuildRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Main />}>
                <Route path="/category" element={<Content />} />
                <Route path="/category/:category" element={<Content />} />
            </Route>
        </Routes>
    )
}