import Head from 'next/head';
import React, { useEffect, useReducer, useState } from 'react';
import axios from 'axios';

export default function CreateFacture() {
  const initialState = {
    email:'',
    nomPrenom:'',
    adresseDeTravail:'',
    tel:'',
    montantLoyer:'',
    impayes:'',
    dateFacture:'',
    note:'',
    
  }
  function reducer(state = initialState, { field, value }:any) {
    return { ...state, [field]: value };
  }

  const [formFields, dispatch] = useReducer(reducer, initialState);
  const [total, setTotal] = useState(0);


  const handleInputChange = (e:any) => {
    dispatch({ field: e.target.name, value: e.target.value });
  };


  const handleSendInvoice = async () => {
    try {
      let { 
        email,nomPrenom,adresseDeTravail,tel,
        montantLoyer,impayes,
        dateFacture,note } = formFields;
      const { data } = await axios.post('', {
        email,
        nomPrenom,
        adresseDeTravail,
        tel,
        montantLoyer,
        impayes,
        dateFacture,
        note,
      });
      console.log(data);
      window.print();
    } catch (error) {
      console.error(error);
    }
  };

  const handlePrintInvoice = () => {
    window.print();
  };

  return (
    <>

    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Invoice Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 my-12">
        <div className="w-full max-w-xl">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                type="email"
                required
                placeholder="Email (aubligatoire)"
                onChange={handleInputChange}
              />
              <label
                className="block text-gray-700 text-sm font-bold my-3"
                htmlFor="nomPrenom"
              >
                Nom & Prenom
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="nomPrenom"
                name="nomPrenom"
                type="text"
                required
                placeholder="Nom & Prenom (aubligatoire)"
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="adresseDeTravail"
              >
                Adresse de travail
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="adresseDeTravail"
                name="adresseDeTravail"
                type="text"
                required
                placeholder="Adresse de travail"
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="tel"
              >
                Telephone
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="tel"
                name="tel"
                type="text"
                required
                placeholder="Telephone"
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="montantLoyer"
              >
                Montant loyer
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="montantLoyer"
                name="montantLoyer"
                type="number"
                required
                placeholder="Montant loyer"
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="impayes"
              >
                Impayes
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="impayes"
                name="impayes"
                type="number"
                required
                placeholder="Impayes"
                onChange={handleInputChange}
              />
            </div>
     
 
            <div className="mb-6">

                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Appartement No</label>
<select id="appart" 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline">

  <option selected></option>
  <option value="R">R</option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
</select>
<label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Appartement Lettre</label>
<select id="lettre" 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline">

  <option selected></option>
  <option value="A">A</option>
  <option value="B">B</option>
  <option value="C">C</option>
  <option value="D">D</option>
  <option value="E">E</option>
</select>
                
              </div>
              <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="dateFacture"
              >
                Date
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="dateFacture"
                name="dateFacture"
                type="date"
                placeholder="dd-mm-yyyy"
                value="" 
                min="2022-08-01" max="2030-12-31"
                onChange={handleInputChange}
              />
            </div>
            <div className="my-6 flex flex-col">
              <label
                htmlFor="note"
                className="block text-gray-700 text-sm font-bold mb-2 w-full"
              >
                Notes
              </label>
              <textarea
                id="note"
                name="note"
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleSendInvoice}
              >
                Enregistrer
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handlePrintInvoice}
              >
                Imprimer
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
    </>
  );
}
