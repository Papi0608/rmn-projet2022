import { NOMEM } from "dns";

const DashboardTableSection = () => {
  const body = [
      {facture: "Nom :",},
      {facture: "Prenom :",},
      {facture: "contrat:",},
      {facture: "dure de valididite:",},
      {facture: "date dexpiration:",},
   
  ];

  return (
    
    <div className="container mx-auto px-4">
      
      <table className=" border border-slate-400 ">
              <thead className="border-b">
                <tr className="bg-gray-400 border-b">
                  <th className="text-3xl font-medium text-white px-2 py-4 border-r">
                  Client
                  </th>
                  <th colSpan={6} className="text-3xl font-medium text-white px-6 py-4 whitespace-nowrap text-center border-r">Facture</th>
                </tr>
              </thead>
              
              <tbody>
                {body.map((row, index) => (
                  <tr className="bg-[#0E5672] border-b" key={index}>
                  <td className="px-6 py-4  text-xl font-medium text-center text-white border-r">{row.facture}</td>
                  <td className="text-xl text-white font-light px-6 py-4 whitespace-nowrap hover:bg-[#0c7dad] text-center border-r">
                  
                  </td>
                  <td className="text-xl text-white font-light px-6 py-4 whitespace-nowrap hover:bg-[#0c7dad] text-center border-r">
                  
                  </td>
                  <td className="text-xl text-white font-light px-6 py-4 whitespace-nowrap hover:bg-[#0c7dad] text-center border-r">
                  
                  </td>
                  <td className="text-xl text-white font-light px-6 py-4 whitespace-nowrap hover:bg-[#0c7dad] text-center border-r">
                  
                  </td>
                  <td className="text-xl text-white font-light px-6 py-4 whitespace-nowrap hover:bg-[#0c7dad] text-center border-r">
                  
                  </td>
                
                </tr>
              ))}
              </tbody>
      </table>
      <button type="button" className="inline-block px-6 py-2.5 bg-green-500 float-right text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg  ">retour
      </button>
    </div>
  );
};

export default DashboardTableSection;