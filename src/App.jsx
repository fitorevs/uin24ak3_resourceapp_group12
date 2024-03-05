// Linje 2 til 6: Global og lokal importering. resources er et objekt som inneholder all dataen for selve nettsiden. Innholdet. siteData er en tom context hvilket skal romme denne dataen. Og App.css er CSS-en som er kompilert fra SASS.
import { resources } from "./assets/ressurser"
import { siteData } from './components/StructureCTX'
import BuildRoutes from './components/BuildRoutes'
import './styles/main.scss'
import './App.css'

// Linje 9 til 35: Selve App funksjonen. Foruten å sette opp siteData er denne hovedsaklig benyttet for å kalle opp andre kompoenter.
function App() {
  // Linje 11 til 31: En funksjon for å gruppere dataen i resources. Denne funksjonen returnerer et objekt. Hver nøkkel er en kategori. Disse har en array. Hvilket igjen har et objekt med to par nøkler, title og url. I tillegg har hver nøkkel også en verdi kalt header, som tilsvarer category i resources uten bindestrek. Foruten disse har du også en nøkkel kalt key. Dette er en array med verdier for alle disse nøklene, så det er enkelt å iterate.
  const retrieveData = () => {
    // linje 13: Lag et tomt objekt for mellomlagring. key-nøkkelen/arrayen skal alltid være med.
    let placeholder = { "key": [] }

    // Linje 16 til 31: Gå gjennom hvert objekt i resources arrayen.
    resources.map(resource => {
      // Linje 18 og 19: Midlertidig variable category for å holde denne verdien. Så må vi slette category nøkkelen fra resource for å ikke få med unødvendig data.
      const category = resource.category
      delete resource["category"]

      // Linje 22 til 31: Vi undersøker om key (kategorien) allerede finnes. Hvis den finnes kan vi legge til den nye dataen i arrayen dens. Om ikke må vi lagre key verdien og sette opp en tom array.
      if (placeholder["key"].includes(category)) {
        // linje 24: resource blir lagt til i denne kategorien sin array. Alle verdier foruten category nøkkelen i rådataen.
        placeholder[category].push(resource)
      } else {
        // Linje 27, 28 og 29: Først legger vi til nøkkelen i key arrayen. Kategorien er nå lagret. Deretter setter vi opp en array for denne kategorien, og gir den samtidig denne resurrsen sin data som umidelbar verdi. Til slutt bruker vi replace metoden mot category strengen og sette header til å være lik denne verdien.
        placeholder["key"].push(category)
        placeholder[category] = [resource]
        placeholder[category]["header"] = category.replace("-", " ")
      }
    })

    // Linje 34: Sende ut placeholder objektet.
    return placeholder
  }

  // Linje 38 til 44: Returner et JSX objekt hvilket tilsvarer nettsiden.
  return (
    // Linje 40 til 43: Wrap BuildRoutes komponentet i siteData sin provider. Hvilket betyr at alle komponenter som er hierarkisk innover får tilgang til verdien satt av denne context-en. Med value settes return-verdien til retrieveData funksjonen som verdi.
    <siteData.Provider value={retrieveData()}>
      {/* Linje 42: Kjør BuildRoutes komponentet og hent dens retur-verdi. */}
      <BuildRoutes />
    </siteData.Provider>
  )
}

export default App