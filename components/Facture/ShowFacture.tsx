import React from 'react';

function ShowFacture(props:any) {
    return (
        <section className="py-20 bg-black">
 <div className="max-w-5xl mx-auto py-16 bg-white">
  <article className="overflow-hidden">
   <div className="bg-[white] rounded-b-md">
    <div className="p-9">
     <div className="space-y-6 text-slate-700">
      <img className="object-cover h-12" src="image/rmn-blue.png" />

      <p className="text-xl font-extrabold tracking-tight uppercase font-body">
       FACTURE
      </p>
     </div>
    </div>
    <div className="p-9">
     <div className="flex w-full">
      <div className="grid grid-cols-4 gap-12">
       <div className="text-sm font-light text-slate-500">
        <p className="text-sm font-normal text-slate-700">Nom et Prenom</p>
        <p>Lamine Mbaye</p>
        <p>lamine@gmail.com</p>
        <p>775783233</p>
        <p>Appartement No: 1A</p>
       </div>
       <div className="text-sm font-light text-slate-500">
        <p className="text-sm font-normal text-slate-700">Numero Facture</p>
        <p>000000</p>

        <p className="mt-2 text-sm font-normal text-slate-700">
         Date
        </p>
        <p>00.00.2022</p>
       </div>
       <div className="text-sm font-light text-slate-500">
        <p className="text-sm font-normal text-slate-700">Periode</p>
        <p>0 Jour</p>

       </div>
      </div>
     </div>
    </div>

    <div className="p-9">
     <div className="flex flex-col mx-0 mt-8">
      <table className="min-w-full divide-y divide-slate-500">
       <thead>
        <tr>
         <th scope="col" className="hidden py-3.5 px-3 text-right text-sm font-normal text-slate-700 sm:table-cell">
         Montant du loyer
         </th>
         <th scope="col" className="hidden py-3.5 px-3 text-right text-sm font-normal text-slate-700 sm:table-cell">
          Impayes
         </th>
         <th scope="col" className="py-3.5 pl-3 pr-4 text-right text-sm font-normal text-slate-700 sm:pr-6 md:pr-0">
          Amount
         </th>
        </tr>
       </thead>
       <tbody>
       
        <tr className="border-b border-slate-200">
        <td className="hidden px-3 py-4 text-sm text-right text-slate-500 sm:table-cell">
          0
         </td>
         <td className="hidden px-3 py-4 text-sm text-right text-slate-500 sm:table-cell">
          0
         </td>
         <td className="hidden px-3 py-4 text-sm text-right text-slate-500 sm:table-cell">
          0.00
         </td>
         
        </tr>

        {/* <!-- Here you can write more products/tasks that you want to charge for--> */}
       </tbody>
       <tfoot>
        <tr>
         <th scope="row" colSpan={3} className="hidden pt-4 pl-6 pr-3 text-sm font-normal text-right text-slate-700 sm:table-cell md:pl-0">
          Total
         </th>
         <td className="pt-4 pl-3 pr-4 text-sm font-normal text-right text-slate-700 sm:pr-6 md:pr-0">
          0.00 Fcfa
         </td>
        </tr>
       </tfoot>
      </table>
     </div>
    </div>

    <div className="mt-48 p-9">
     <div className="border-t pt-9 border-slate-200">
      <div className="text-sm font-light text-slate-700">
       <p>
        Signature Direction
       </p>
      </div>
     </div>
    </div>
   </div>
  </article>
 </div>
</section>
    );
}

export default ShowFacture;