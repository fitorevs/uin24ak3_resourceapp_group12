import { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { siteData } from './StructureCTX'

export default function Nav() {
    const { category } = useParams()
    const categories = useContext(siteData)["key"]
    const content = useContext(siteData)

    return (
        <nav>
            <ul className="menu">
                {categories.map((cat, index) =>
                (
                    <li key={"category" + index} className={cat === category ? "active" : null}>
                        <Link to={"/category/" + cat}>
                            {content[cat].header.toUpperCase()}
                        </Link>
                    </li>
                )
                )}
            </ul>
        </nav>
    )
}