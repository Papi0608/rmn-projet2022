export default function dashboard (){
  return(
    
    <div className="flex flex-col">
          <nav className="relative w-full flex flex-wrap items-center justify-between py-3 bg-[#0E5672] text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg">
              <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
                <div className="container-fluid">
                   <button type="button" className="inline-block px-6 py-2.5 bg-green-500 float-right text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg  ">Accueil</button>
                   <button type="button" className="inline-block px-6 py-2.5 bg-purple-600 float-right text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out">Se DECONNECTER</button>
                  <img src="\image\RMN-WHITE.png" className="w-[10%] h-auto border-b " />
                </div>
              </div>
   
          </nav>
               <h2 className="font-medium bg-gray-500 leading-tight text-2xl text-right  text-white">Identifiant: Role</h2>
              <h3 className="font-medium bg-[#0E5672] w-[10%] leading-tight text-4xl  text-white">Accueil</h3><br/><br/>
         
            
        <table className="border-separate border border-slate-400 ">
          <thead className="border-b">
            <tr className="bg-gray-400 border-b">
              <th className="text-3xl font-medium text-white px-2 py-4 border-r">
                Etages
              </th>
              <th colSpan={6} className="text-3xl font-medium text-white  font-light px-6 py-4 whitespace-nowrap text-center border-r">APPARTEMENTS</th>
              
            </tr>
          </thead>
          
          <tbody>
       
            <tr className="bg-[#0E5672] border-b">
              <td className="px-6 py-4 whitespace-nowrap text-xl font-medium text-center text-white border-r">4</td>
              <td className="text-xl text-white font-light px-6 py-4 whitespace-nowrap hover:bg-[#0c7dad] text-center border-r">
              <a href="login" className="mt-6 w-96 rounded-xl text-center hover:text-orange-400 text-white">
                <h3 className="text-2xl font-bold">4A</h3> 
              </a>
              </td>
              <td className="text-xl text-white font-light px-6 py-4 whitespace-nowrap hover:bg-[#0c7dad] text-center border-r">
              <a href="login" className="mt-6 w-96 rounded-xl text-center hover:text-orange-400 text-white">
                <h3 className="text-2xl font-bold">4B </h3> 
              </a>
              </td>
              <td className="text-xl text-white font-light px-6 py-4 whitespace-nowrap hover:bg-[#0c7dad] text-center border-r">
              <a href="login" className="mt-6 w-96 rounded-xl text-center hover:text-orange-400 text-white">
                <h3 className="text-2xl font-bold">4C </h3> 
              </a>
              </td>
              <td className="text-xl text-white font-light px-6 py-4 whitespace-nowrap hover:bg-[#0c7dad] text-center border-r">
              <a href="login" className="mt-6 w-96 rounded-xl text-center hover:text-orange-400 text-white">
                <h3 className="text-2xl font-bold">4D</h3> 
              </a>
              </td>
              <td className="text-xl text-white font-light px-6 py-4 whitespace-nowrap hover:bg-[#0c7dad] text-center border-r">
              <a href="login" className="mt-6 w-96 rounded-xl text-center hover:text-orange-400 text-white">
                <h3 className="text-2xl font-bold">4E </h3> 
              </a>
              </td>
             
            </tr>
            <tr className="bg-[#0E5672] border-b">
              <td className="px-6 py-4 whitespace-nowrap text-xl font-medium text-center text-white border-r">3</td>
              <td className="text-xl text-white font-light px-6 py-4 whitespace-nowrap hover:bg-[#0c7dad] text-center border-r">
              <a href="login" className="mt-6 w-96 rounded-xl text-center hover:text-orange-400 text-white">
                <h3 className="text-2xl font-bold">3A</h3> 
              </a>
              </td>
              <td className="text-xl text-white font-light px-6 py-4 whitespace-nowrap hover:bg-[#0c7dad] text-center border-r">
              <a href="login" className="mt-6 w-96 rounded-xl text-center hover:text-orange-400 text-white">
                <h3 className="text-2xl font-bold">3B </h3> 
              </a>
              </td>
              <td className="text-xl text-white font-light px-6 py-4 whitespace-nowrap hover:bg-[#0c7dad] text-center border-r">
              <a href="login" className="mt-6 w-96 rounded-xl text-center hover:text-orange-400 text-white">
                <h3 className="text-2xl font-bold">3C </h3> 
              </a>
              </td>
              <td className="text-xl text-white font-light px-6 py-4 whitespace-nowrap hover:bg-[#0c7dad] text-center border-r">
              <a href="login" className="mt-6 w-96 rounded-xl text-center hover:text-orange-400 text-white">
                <h3 className="text-2xl font-bold">3D</h3> 
              </a>
              </td>
              <td className="text-xl text-white font-light px-6 py-4 whitespace-nowrap hover:bg-[#0c7dad] text-center border-r">
              <a href="login" className="mt-6 w-96 rounded-xl text-center hover:text-orange-400 text-white">
                <h3 className="text-2xl font-bold">3E </h3> 
              </a>
              </td>
             
              
              
            </tr>
            <tr className="bg-[#0E5672] border-b">
              <td className="px-6 py-4 whitespace-nowrap text-xl font-medium text-center text-white border-r">2</td>
              <td className="text-xl text-white font-light px-6 py-4 whitespace-nowrap hover:bg-[#0c7dad] text-center border-r">
              <a href="login" className="mt-6 w-96 rounded-xl text-center hover:text-orange-400 text-white">
                <h3 className="text-2xl font-bold">2A</h3> 
              </a>
              </td>
              <td className="text-xl text-white font-light px-6 py-4 whitespace-nowrap hover:bg-[#0c7dad] text-center border-r">
              <a href="login" className="mt-6 w-96 rounded-xl text-center hover:text-orange-400 text-white">
                <h3 className="text-2xl font-bold">2B </h3> 
              </a>
              </td>
              <td className="text-xl text-white font-light px-6 py-4 whitespace-nowrap hover:bg-[#0c7dad] text-center border-r">
              <a href="login" className="mt-6 w-96 rounded-xl text-center hover:text-orange-400 text-white">
                <h3 className="text-2xl font-bold">2C </h3> 
              </a>
              </td>
              <td className="text-xl text-white font-light px-6 py-4 whitespace-nowrap hover:bg-[#0c7dad] text-center border-r">
              <a href="login" className="mt-6 w-96 rounded-xl text-center hover:text-orange-400 text-white">
                <h3 className="text-2xl font-bold">2D</h3> 
              </a>
              </td>
              <td className="text-xl text-white font-light px-6 py-4 whitespace-nowrap hover:bg-[#0c7dad] text-center border-r">
              <a href="login" className="mt-6 w-96 rounded-xl text-center hover:text-orange-400 text-white">
                <h3 className="text-2xl font-bold">2E </h3> 
              </a>
              </td>
              
            </tr>
            <tr className="bg-[#0E5672] border-b">
              <td className="px-6 py-4 whitespace-nowrap text-xl font-medium text-center text-white border-r">1</td>
              <td className="text-xl text-white font-light px-6 py-4 whitespace-nowrap hover:bg-[#0c7dad] text-center border-r">
              <a href="login" className="mt-6 w-96 rounded-xl text-center hover:text-orange-400 text-white">
                <h3 className="text-2xl font-bold">1A</h3> 
              </a>
              </td>
              <td className="text-xl text-white font-light px-6 py-4 whitespace-nowrap hover:bg-[#0c7dad] text-center border-r">
              <a href="login" className="mt-6 w-96 rounded-xl text-center hover:text-orange-400 text-white">
                <h3 className="text-2xl font-bold">1B </h3> 
              </a>
              </td>
              <td className="text-xl text-white font-light px-6 py-4 whitespace-nowrap hover:bg-[#0c7dad] text-center border-r">
              <a href="login" className="mt-6 w-96 rounded-xl text-center hover:text-orange-400 text-white">
                <h3 className="text-2xl font-bold">1C </h3> 
              </a>
              </td>
              <td className="text-xl text-white font-light px-6 py-4 whitespace-nowrap hover:bg-[#0c7dad] text-center border-r">
              <a href="login" className="mt-6 w-96 rounded-xl text-center hover:text-orange-400 text-white">
                <h3 className="text-2xl font-bold">1D</h3> 
              </a>
              </td>
              <td className="text-xl text-white font-light px-6 py-4 whitespace-nowrap hover:bg-[#0c7dad] text-center border-r">
              <a href="login" className="mt-6 w-96 rounded-xl text-center hover:text-orange-400 text-white">
                <h3 className="text-2xl font-bold">1E </h3> 
              </a>
              </td>
             
              
            </tr>
            <tr className="bg-[#0E5672] border-b">
              <td className="px-6 py-4 whitespace-nowrap text-xl font-medium text-center text-white border-r">R</td>
              <td className="text-xl text-white font-light px-6 py-4 whitespace-nowrap hover:bg-[#0c7dad] text-center border-r">
              <a href="login" className="mt-6 w-96 rounded-xl text-center hover:text-orange-400 text-white">
                <h3 className="text-2xl font-bold">RA</h3> 
              </a>
              </td>
              <td className="text-xl text-white font-light px-6 py-4 whitespace-nowrap hover:bg-[#0c7dad] text-center border-r">
              <a href="login" className="mt-6 w-96 rounded-xl text-center hover:text-orange-400 text-white">
                <h3 className="text-2xl font-bold">RB </h3> 
              </a>
              </td>
              <td className="text-xl text-white font-light px-6 py-4 whitespace-nowrap hover:bg-[#0c7dad] text-center border-r">
              <a href="login" className="mt-6 w-96 rounded-xl text-center hover:text-orange-400 text-white">
                <h3 className="text-2xl font-bold">RC </h3> 
              </a>
              </td>
              <td className="text-xl text-white font-light px-6 py-4 whitespace-nowrap hover:bg-[#0c7dad] text-center border-r">
              <a href="login" className="mt-6 w-96 rounded-xl text-center hover:text-orange-400 text-white">
                <h3 className="text-2xl font-bold">RD</h3> 
              </a>
              </td>
              <td className="text-xl text-white font-light px-6 py-4 whitespace-nowrap hover:bg-[#0c7dad] text-center border-r">
              <a href="login" className="mt-6 w-96 rounded-xl text-center hover:text-orange-400 text-white">
                <h3 className="text-2xl font-bold">RE </h3> 
              </a>
              </td>
            </tr>
          </tbody>
          <tfoot>
          <tr className="bg-gray-400 border-b">
              <th className="text-3xl font-medium text-white px-2 py-4 border-r">
                Etages
              </th>
              <th colSpan={6} className="text-3xl font-medium text-white  font-light px-6 py-4 whitespace-nowrap text-center border-r">APPARTEMENTS</th>
              
            </tr>
          </tfoot>
        </table>
        </div>
   
  
  )
}