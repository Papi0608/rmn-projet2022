import * as Next from 'next';
import Link from 'next/link'

const NavSection = () => {
    return (
        <nav className="relative w-full  items-center justify-between py-3 bg-[#0E5672] text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg">
        <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
            <div className="container-fluid">
            <Link href="/Facture">
            <button type="button" className="inline-block px-6 py-2.5 bg-gray-500 float-right text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg  ">Facture</button>
            </Link>
            <Link href="/">
            <button type="button" className="inline-block px-6 py-2.5 bg-gray-500 float-right text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg  ">Accueil</button>
            </Link>
            <Link href="/logout">
            <button type="button" className="inline-block px-6 py-2.5 bg-red-300 float-right text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out">Se DECONNECTER</button>
            </Link>
            <img src="\image\RMN-WHITE.png" className="w-[10%] h-auto border-b " />
            </div>
            </div>
       
        </nav>
    )
}

export default NavSection;