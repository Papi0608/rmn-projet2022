import React, { useState, useEffect, ChangeEvent } from "react";
import RmnDataService from "../../src/services/RmnService";
import RmnEtagesData from '../../src/types/RmnEtages';

const DashboardTableSection = () => {

  const body = [
    {
        "id": "4",
        "A": {
         "contrat": [
          {
           "id": "569",
           "date_debut": "2022/07/01",
           "date_de_naissance": "1986/08/02",
           "date_fin": "2023/06/30",
           "nom": "Mbaye",
           "prenom": "Dame"
          },
          {
           "id": "568",
           "date_debut": "2021/07/01",
           "date_de_naissance": "1986/08/02",
           "date_fin": "2022/06/30",
           "nom": "Mbaye",
           "prenom": "Madiaw"
          },
          {
           "id": "567",
           "date_debut": "2020/07/01",
           "date_de_naissance": "1986/08/02",
           "date_fin": "2021/06/30",
           "nom": "Mbaye",
           "prenom": "Lamine"
          }
         ],
         "facture": [
          {
           "id": "123",
           "client_nom": "Mbaye",
           "client_prenom": "Dame",
           "date": "2022/08/30",
           "statut": "Payer"
          },
          {
           "id": "456",
           "client_nom": "Mbaye",
           "client_prenom": "Madiaw",
           "date": "2021/07/30",
           "statut": "Payer"
          },
          {
           "id": "789",
           "client_nom": "Mbaye",
           "client_prenom": "Lamine",
           "date": "2020/06/30",
           "statut": "Payer"
          }
         ]
        },
        "B": {
         "contrat": [
          {
           "id": "569",
           "date_debut": "2022/07/01",
           "date_de_naissance": "1986/08/02",
           "date_fin": "2023/06/30",
           "nom": "Mbaye",
           "prenom": "Dame"
          },
          {
           "id": "568",
           "date_debut": "2021/07/01",
           "date_de_naissance": "1986/08/02",
           "date_fin": "2022/06/30",
           "nom": "Mbaye",
           "prenom": "Madiaw"
          },
          {
           "id": "567",
           "date_debut": "2020/07/01",
           "date_de_naissance": "1986/08/02",
           "date_fin": "2021/06/30",
           "nom": "Mbaye",
           "prenom": "Lamine"
          }
         ],
         "facture": [
          {
           "id": "123",
           "client_nom": "Mbaye",
           "client_prenom": "Dame",
           "date": "2022/08/30",
           "statut": "Payer"
          },
          {
           "id": "456",
           "client_nom": "Mbaye",
           "client_prenom": "Madiaw",
           "date": "2021/07/30",
           "statut": "Payer"
          },
          {
           "id": "789",
           "client_nom": "Mbaye",
           "client_prenom": "Lamine",
           "date": "2020/06/30",
           "statut": "Payer"
          }
         ]
        },
        "C": {
         "contrat": [
          {
           "id": "569",
           "date_debut": "2022/07/01",
           "date_de_naissance": "1986/08/02",
           "date_fin": "2023/06/30",
           "nom": "Mbaye",
           "prenom": "Dame"
          },
          {
           "id": "568",
           "date_debut": "2021/07/01",
           "date_de_naissance": "1986/08/02",
           "date_fin": "2022/06/30",
           "nom": "Mbaye",
           "prenom": "Madiaw"
          },
          {
           "id": "567",
           "date_debut": "2020/07/01",
           "date_de_naissance": "1986/08/02",
           "date_fin": "2021/06/30",
           "nom": "Mbaye",
           "prenom": "Lamine"
          }
         ],
         "facture": [
          {
           "id": "123",
           "client_nom": "Mbaye",
           "client_prenom": "Dame",
           "date": "2022/08/30",
           "statut": "Payer"
          },
          {
           "id": "456",
           "client_nom": "Mbaye",
           "client_prenom": "Madiaw",
           "date": "2021/07/30",
           "statut": "Payer"
          },
          {
           "id": "789",
           "client_nom": "Mbaye",
           "client_prenom": "Lamine",
           "date": "2020/06/30",
           "statut": "Payer"
          }
         ]
        },
        "D": {
         "contrat": [
          {
           "id": "569",
           "date_debut": "2022/07/01",
           "date_de_naissance": "1986/08/02",
           "date_fin": "2023/06/30",
           "nom": "Mbaye",
           "prenom": "Dame"
          },
          {
           "id": "568",
           "date_debut": "2021/07/01",
           "date_de_naissance": "1986/08/02",
           "date_fin": "2022/06/30",
           "nom": "Mbaye",
           "prenom": "Madiaw"
          },
          {
           "id": "567",
           "date_debut": "2020/07/01",
           "date_de_naissance": "1986/08/02",
           "date_fin": "2021/06/30",
           "nom": "Mbaye",
           "prenom": "Lamine"
          }
         ],
         "facture": [
          {
           "id": "123",
           "client_nom": "Mbaye",
           "client_prenom": "Dame",
           "date": "2022/08/30",
           "statut": "Payer"
          },
          {
           "id": "456",
           "client_nom": "Mbaye",
           "client_prenom": "Madiaw",
           "date": "2021/07/30",
           "statut": "Payer"
          },
          {
           "id": "789",
           "client_nom": "Mbaye",
           "client_prenom": "Lamine",
           "date": "2020/06/30",
           "statut": "Payer"
          }
         ]
        },
        "E": {
         "contrat": [
          {
           "id": "569",
           "date_debut": "2022/07/01",
           "date_de_naissance": "1986/08/02",
           "date_fin": "2023/06/30",
           "nom": "Mbaye",
           "prenom": "Dame"
          },
          {
           "id": "568",
           "date_debut": "2021/07/01",
           "date_de_naissance": "1986/08/02",
           "date_fin": "2022/06/30",
           "nom": "Mbaye",
           "prenom": "Madiaw"
          },
          {
           "id": "567",
           "date_debut": "2020/07/01",
           "date_de_naissance": "1986/08/02",
           "date_fin": "2021/06/30",
           "nom": "Mbaye",
           "prenom": "Lamine"
          }
         ],
         "facture": [
          {
           "id": "123",
           "client_nom": "Mbaye",
           "client_prenom": "Dame",
           "date": "2022/08/30",
           "statut": "Payer"
          },
          {
           "id": "456",
           "client_nom": "Mbaye",
           "client_prenom": "Madiaw",
           "date": "2021/07/30",
           "statut": "Payer"
          },
          {
           "id": "789",
           "client_nom": "Mbaye",
           "client_prenom": "Lamine",
           "date": "2020/06/30",
           "statut": "Payer"
          }
         ]
        }
    }
]
  
    return (
      <div className="container mx-auto px-4">
                  {body.map((row, index) => (
                    <ul>
                        {row.A.contrat.map((c, i) => (
                        <li key={i}>
                          <span>{c.id}</span>
                          <span>{c.nom}</span>
                          <span>{c.prenom}</span>
                          <span>{c.date_debut}</span>
                          <span>{c.date_de_naissance}</span>
                        </li>
                        ))}
                    </ul>
                ))}
      </div>
    );
  };
  
  export default DashboardTableSection;
  