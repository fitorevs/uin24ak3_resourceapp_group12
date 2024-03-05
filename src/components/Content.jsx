import { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { siteData } from './StructureCTX'

export default function Content() {
    const { category } = useParams()
    const content = useContext(siteData)[category]

    function firstUpper(string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    return (
        <>
            {
                category ? (
                    <>
                        <h2 className="title">{firstUpper(content.header)}</h2>
                        <ul>
                            {content.map((entry, index) => (
                                <li key={category + index}>
                                    <h3>
                                        <Link target="_blank" to={entry.url}>{entry.title}</Link>
                                    </h3>
                                </li>
                            ))}
                        </ul>
                    </>
                ) : null
            }
        </>
    )
}