// Linje 2 til 4: Global og lokal importering.
import { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { siteData } from './StructureCTX';

// Linje 7 til 49: En funksjon som håndterer logikken for å vise innholdet til en kategori.
export default function Content() {
    // Linje 9: Hent parameteret fra URL-en (:category -- se BuildRoutes) og lagre det i variablen category.
    let { category } = useParams();

    // Linje 12: Hent alle gyldige kategorier fra context-en siteData og lagre dem som validPages.
    const validPages = useContext(siteData)["key"]

    // Linje 15 til 18: Hvis kategorien brukeren enten har trykket på eller skrevet selv ikke stemmer med de kategoriene vi vet finnes -- eller kategorien ikke er oppgitt -- set en standardverdi.
    if (!validPages.includes(category) || category === undefined) {
        // Linje 17: Bruk den første kategorien i validPages som standardverdi for category.
        category = validPages[0]
    }

    // Linje 21: Basert på kategorien hent dens tilsvarende verdier fra siteData.
    const content = useContext(siteData)[category]

    // Linje 24 til 27: En funksjon knyttet mot en variable kalt firstUpper. Den tar en verdi, string.
    function firstUpper(string) {
        // Linje 26: Returner string med den første bokstaven som stor. Med charAt metoden kan vi hente en gitt bokstav basert på index. Samtidig kjøres toUpperCase metoden mot den forrige metoden sin retur verdi. Som gjør den til stor bokstav. Så slås dette sammen med verdien til strig fra index 1 og utover, utført med slice metoden.
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    // Linje 30 til 45: Sett opp et artikkel-kort med innholdet for denne kategorien.
    return (
        <main>
            <article>
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
            </article>
        </main>
    )
}