export default interface RmnEtageData {
  id: string,
  A?: {
    contrat: Array<any>
    ,
    facture: {
      id: string,
      date: string,
      statut: string
    }
  },
  B?: {
    contrat: {
      id: string,
      date_debut: string,
      date_de_naissance: string,
      date_fin: string,
      nom: string,
      prenom: string
    },
    facture: {
      id: string,
      date: string,
      statut: string
    }
  },
  C?: {
    contrat: {
      id: string,
      date_debut: string,
      date_de_naissance: string,
      date_fin: string,
      nom: string,
      prenom: string
    },
    facture: {
      id: string,
      date: string,
      statut: string
    }
  },
  D?: {
    contrat: {
      id: string,
      date_debut: string,
      date_de_naissance: string,
      date_fin: string,
      nom: string,
      prenom: string
    },
    facture: {
      id: string,
      date: string,
      statut: string
    }
  },
  E?: {
    contrat: {
      id: string,
      date_debut: string,
      date_de_naissance: string,
      date_fin: string,
      nom: string,
      prenom: string
    },
    facture: {
      id: string,
      date: string,
      statut: string
    }
  }
}