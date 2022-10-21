import React, { ReactNode, useState } from "react";
import RmnEtagesData from '../../src/types/RmnEtages';

const Details = (props: { etages: string; }) =>  {
    if(typeof props.etages == 'undefined'){
        console.log("Pas de parametres")
    throw new Error('Pas de parametres')
    }
    // the value of the search field 
    const [name, setName] = useState('');
    const [nom, setContrat] = useState('');
   
    const etages = JSON.parse(props.etages);
    const data = etages[0].A
    const contrats = data.contrat
    const factures = data.facture
    if(!factures){
        return <></>
    }
    const [foundContrats, setFoundContrats] = useState(contrats);
    const [foundFactures, setFoundFactures] = useState(factures);

    const filter = (e: { target: { value: any; }; }) => {
        const keyword = e.target.value;
    
        if (keyword !== '') {
          const results = factures.filter((facture: { client_prenom: string; }) => {
            if(!facture){
                return ""
            }
            return facture.client_prenom.toLowerCase().startsWith(keyword.toLowerCase());
          });
          setFoundFactures(results);
        } else {
            setFoundFactures(factures);
          // If the text field is empty, show all users
        }
    
        setName(keyword);
      };

      const filterContrat = (e: { target: { value: any; }; }) => {
        const keyword = e.target.value;
    
        if (keyword !== '') {
          const results = contrats.filter((contrat: { prenom: string; }) => {
            if(!contrat){
                return ""
            }
            return contrat.prenom.toLowerCase().startsWith(keyword.toLowerCase());
          });
          setFoundContrats(results);
        } else {
            setFoundContrats(contrats);
        }
    
        setContrat(keyword);
      };

    return (
        <div className="grid grid-cols-1 gap-1 md:grid-cols-2">
       <div className="container">
      <input
        type="search"
        value={name}
        onChange={filter}
        className="input"
        placeholder="Factures"
      />

      <div className="facture-list">
        {foundFactures && foundFactures.length > 0 ? (
          foundFactures.map((facture: {
              [x: string]: ReactNode; id: any 
                }) => (
            <li key={facture.id} className="facture">
            <span className="facture-id">{facture.id}</span>
            <span className="facture-client_prenom">{facture.client_prenom} {facture.client_nom}</span>
            <span className="facture-date"> {facture.date}</span>
            <span className="facture-statut"> {facture.statut}</span>
            </li>
          ))
        ) : (
          <h1>No results found!</h1>
        )}
      </div>
        </div>

        <div className="container">
      <input
        type="search"
        value={nom}
        onChange={filterContrat}
        className="input"
        placeholder="Contrat"
      />

      <div className="contrat-list">
        {foundContrats && foundContrats.length > 0 ? (
          foundContrats.map((contrat: {
              [x: string]: ReactNode; id: any 
            }) => (
            <li key={contrat.id} className="contrat">
            <span className="contrat-id">{contrat.id}</span>
            <span className="contrat-prenom"> {contrat.prenom} {contrat.nom}</span>
            <span className="contrat-date">{contrat.date_debut}</span>
            <span className="contrat-date">~</span>
            <span className="contrat-date"> {contrat.date_fin}</span>
            </li>
          ))
        ) : (
          <h1>No results found!</h1>
        )}
      </div>
        </div>
        </div>

  );

}

export default Details;