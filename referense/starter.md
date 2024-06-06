Världens Länder

Välkommen till detta webbutvecklingsprojekt som kommer att utmana och stärka dina färdigheter inom Javascript och React. Detta projekt är inte bara en övning, utan något du kan stolt presentera i din portfolio för att visa din kompetens inom webbutveckling.



Du kan testa en demo på appen här: https://techover-flag-app.vercel.app/. Längst ner på appen ser du en tool bar. Där kan du testa olika inställningar på appen. De är byggda utefter ett par av de vanligaste felen elever gör med sin inlämning. Dessa är att de: glömmer en container, inte ställer in storlek på flaggor och glömmer implementera en loading state.

Uppgiften:
Du kommer att integrera med REST-ländernas API för att hämta landsdata och visa dem enligt givna designskisser. Du ska bygga projektet i React. Du har friheten att välja vilka paket du använder för HTTP-förfrågningar och stilmallar för att anpassa och forma ditt projekt. Det enda kravet är att du använder React som frontendramverk.

Krav för användarinteraktion:
1. Visning av Länder:

   - Användare ska kunna se samtliga länder från API:et på startsidan.

2. Sökning:

   - Implementera ett sökfält som möjliggör sökning efter länder baserat på användarens input.

3. Filtrering av länder:

   - Erbjud en dropdown-funktion för att filtrera länder efter deras region.

4. Detaljerad Landinformation:

   - Möjliggör att användare kan klicka på ett land för att se mer detaljerad information på en separat sida.

5. Grannländer:

   - Ge användaren möjlighet att navigera till grannländerna från den detaljerade landsinformationen.

6. Ljus och Mörkt Läge:

   - Implementera en växlingsfunktion för färgscheman mellan ljus och mörkt läge för användarens visningspreferens.

7. Loading state:
  - När du gör api anrop för att hämta data ska du uppdatera ditt UI med loading state indikatorer.

  - Du kan läsa på om hur man gör här!

8. Routes
  - Användaren ska kunna navigera igenom din app via olika routes

  - Det ska finnas en route för hemmaskärmen /

  - Det ska finnas en dynamisk route för de specefika länderna /:name

  - Hur du väljer att namnge dina routes är upp till dig

9. Deploya ditt projekt:

  - Användare ska kunna nå ditt projekt via webbläsaren. Det är ett krav på att du deployar ditt projekt. Förslagsvis med Netlify. Uppdatera links.md med länken till dit deployade projekt.


Det finns en fil som heter checklist.md som innehåller en checklista på allt som krävs för att få godkänt. Använd den för att säkerställa att du lämnar in en uppgift som kan få godkänt.
Uppstarts Guide:
För att effektivt genomföra detta projekt, kan du följ dessa steg:


1. Nödvändiga Komponenter:

   - Navbar: Syns överst på sidan på alla undersidor.

   - Sökfält (Search): Ansvarig för att söka efter länder.

   - Dropdown: Används för att filtrera länder efter deras kontinenter.

   - CountryCard: Ett kort för varje land på startsidan.

   - HomePage: En övergripande komponent som representerar startsidan.

   - CountryPage: En separat sida som visar detaljerad information om ett land.
   2. Implementering av Dark/Light Mode:

   - Du kan använda dig av CSS Variabler för att enkelt byta mellan färglägen.

   - Eftersom det är navbaren som styr funktionaliteten av light/dark mode bör du implementera en lösning för att byta lägen i din Navbar

   - Här är en 9 minuter lång video om CSS Variabler - https://youtu.be/oZPR_78wCnY


3. Filtrering av Länder efter Kontinenter:

   - Du ska använda dig av API-endpointen "/region/{region}" för att hämta länder i en specifik kontinent (region).

   - Implementera en state för vald kontinent och ändring av fetch-request baserat på användarens val.


4. Routing med React-router-dom:

   - Du bör använda dig av react-router-dom paketet för att skapa två rutter: "/" för HomePage-komponenten och "/:name" för CountryPage-komponenten.

  - Vi byggde ett projekt tidigare i kursen (Advanced React - React router) med react-router-dom. Du kan ta lösnngarna från det projektet och implementera dem här.


  5. Ditt projekt ska finnas på Github

  - Du ska utveckla ditt projekt och se till att du pushar din kod till Github. Öva på att commita och uppdatera din repot repository!

  - Uppdatera links.md med länken till dit repo.

Inlämning:
- Projektet lämnas in genom att skapa en zip-fil av projektmappen (exkludera node_modules och package-lock.json) och ladda upp zip foldern här.

- Du ska inkludera två länkar: en till ditt GitHub-repository och en till ditt projekt som är deployat med hjälp av Netlify (eller liknande tjänst). Dessa länkar ska ligga i links.md filen.

- Gå igenom checklist.md för att säkerställa att du gjort allt som krävs för godkänt

Undvik att inkludera 'node_modules'. Det sparar plats och undviker duplicering av paket.


Demo: 

https://techover-flag-app.vercel.app/

