# Introduksjon

Målet med oppgaven er å lage en webside som viser en oversikt over politibiler. Hver politibil blir fremvist med ulik informasjon som merke, modell, årsmodell, reg.nummer og status. Andre funksjoner som er inkludert i løsninger er filtrering av biler, henting av data fra et API, endring av status med fiktive backend-kall, samt tester.

# Antagelser

- Filtere: Her har jeg antatt at de relevante filtrene er: merke, bilmodell, status og årsmodell. Jeg eksluderer data som id, regNr og oppdrag. Id virker irrelevant for brukeren. RegNr virker heller releavnt å finne via et søkefelt (om dette skulle blitt implementert i fremtiden). Oppdrag er ikke inkludert da jeg antar at denne type data kan være mye forskjellig og er dermed ikke standardisert for filteralternativer.
- Endring av status på politibiler: For å endre status på politibiler vil brukeren få muligheten til å velge mellom de ulike statusene som er definert i dataen. Dette bør bli implimentert mer dynamisk dersom det finner seg at det eksisterer andre type statuser enn det som blir vist i APIet så langt. Brukeren vil via en dropdown-meny kunne velge mellom statusene og trykke på knappen "Endre status" med den endelige statusen brukeren velger. Så langt vil det fiktive kallet skrive ut en melding i consollen, markert med registreringsnummer og id på bilen.Dersom dette skulle sende noe til backenden på ekte, ville man utvikle en fetch-metode som sender en POST-request gjennom API-et som oppdaterer statusen i backenden.

# Beskrivelse av løsningen

Løsningen min består av tre forskjellige komponenter: CarFilter.js, DataCard.js og DisplayData.js. Disse komponentene samarbeider for å filtrere og vise informasjon om politibiler hentet fra API-et som ble gitt i oppgaven.

- CarFilter.js: Dette er en komponent som inneholder ulike filtermuligheter for å filtrere bilene etter merke, modell, status, og årsmodell. Brukeren kan velge mellom disse filtrene for å vise spesifikke biler.
- DataCard.js: Denne komponenten viser informasjon om en individuell bil. Den tar inn bildata som parameter og rendrer bilens merke, modell, registreringsnummer, status, og oppdrag. Brukeren kan også oppdatere statusen på bilen via et statusvalg.
- DisplayData.js: Hovedkomponenten som viser bildataen gjennom DataCard komponenten, samt filtervalg gjennom CarFilter komponenten.

I tillegg har jeg to tilpasset react hooks - useFetchAPI i Api.js og useFilterData i FilterData.js. useFetchAPI håndterer henting av bildata fra API-et og useFilterData har den underliggende logikken for filtrering.

# Testing

Testingen blir gjennomført gjennom det innebygde react biblioteket Jest. Testen sikrer at hovedappen rendrer uten problemer, og sjekker at bilkortene vises i brukergrensesnittet. Det er ikke behov for å teste komponenter som er brukt fra tredjeparter som "React bootstrap" da disse er testet på forhånd. For å kjøre testen kan man kjøre: `npm start`

# Arkitektur og teknologi

For å løse caseoppgaven har jeg benyttet meg av språket JavaScript med bruk av rammeverket React. I tillegg har jeg tatt i bruk av ui-rammeverket "React bootstrap". Jeg har forsøkt å holde en balanse mellom bruk av rammeverk, samt egen logikk for å vise ferdighetene mine. I et virkelig prosjekt ville jeg nok tatt i bruk av flere ui-rammeverk. Om løsningen skulle blitt videreutviklet ville jeg forsøkt å dele opp komponentene i større grad. For øyeblikket kan fordelingen virke noe ustrukturert.

Jeg har brukt Create-React-App for å starte og kjøre websiden. Under er de offisielle stegene for hvordan man kjører websiden.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
