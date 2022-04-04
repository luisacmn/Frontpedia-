import React from "react";
import Card from "./Card";
import infobox from "../infobox";

function createCard(infoTerms) {
  return (
    <Card
      key={infoTerms.id}
      img={infoTerms.img}
      name={infoTerms.name}
      description={infoTerms.description}
      href={infoTerms.href}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">frontpedia</h1>
      <dl className="dictionary">{infobox.map(createCard)}</dl>
      <footer>Copyright © {new Date().getFullYear()} luisacmn</footer>
    </div>
  );
}

export default App;
