import React, { useState, useEffect, ChangeEvent } from "react";
import RmnDataService from "../../src/services/RmnService";
import RmnEtagesData from '../../src/types/RmnEtages';
const TableA = () => {
    const [etages, setEtages] = useState<Array<RmnEtagesData>>([]);
    const [searchAppart, setSearchAppart] = useState<string>("");

    useEffect(() => {
        retrieveEtages();
    }, []);


    const retrieveEtages = () => {
        RmnDataService.get({
            id: searchAppart
        })
            .then((response: any) => {
                setEtages(response.data.body);
            })
            .catch((e: Error) => {
                console.log(e);
            });
    };
   
    console.log(etages);
    const findByAppart = () => {
        RmnDataService.findByTitle(searchAppart)
            .then((response: any) => {
                setEtages(response.data);
                console.log(response.data);
            })
            .catch((e: Error) => {
                console.log(e);
            });
    };
    const body = [
        { etages: "4", A: "4A", B: "4B", C: "4C", D: "4D", E: "4E" },
        { etages: "3", A: "3A", B: "3B", C: "3C", D: "3D", E: "3E" },
        { etages: "2", A: "2A", B: "2B", C: "2C", D: "2D", E: "2E" },
        { etages: "1", A: "1A", B: "1B", C: "1C", D: "1D", E: "1E" },
        { etages: "R", A: "RA", B: "RB", C: "RC", D: "RD", E: "RE" },

    ];


    return (
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
                {body.map((row, index) => (
                    <tr className="bg-[#0E5672] border-b" key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-xl font-medium text-center text-white border-r">{row.etages}</td>
                        <td className="text-xl text-white font-light px-6 py-4 whitespace-nowrap hover:bg-[#0c7dad] text-center border-r">
                            <a onClick={() => setSearchAppart(row.A) } className="mt-6 w-96 rounded-xl text-center hover:text-orange-400 text-white">
                                <h3 className="text-2xl font-bold">{row.A}</h3>
                            </a>
                        </td>
                        <td className="text-xl text-white font-light px-6 py-4 whitespace-nowrap hover:bg-[#0c7dad] text-center border-r">
                            <a onClick={() => setSearchAppart(row.B)} className="mt-6 w-96 rounded-xl text-center hover:text-orange-400 text-white">
                                <h3 className="text-2xl font-bold">{row.B}</h3>
                            </a>
                        </td>
                        <td className="text-xl text-white font-light px-6 py-4 whitespace-nowrap hover:bg-[#0c7dad] text-center border-r">
                            <a onClick={() => setSearchAppart(row.C)} className="mt-6 w-96 rounded-xl text-center hover:text-orange-400 text-white">
                                <h3 className="text-2xl font-bold">{row.C}</h3>
                            </a>
                        </td>
                        <td className="text-xl text-white font-light px-6 py-4 whitespace-nowrap hover:bg-[#0c7dad] text-center border-r">
                            <a onClick={() => setSearchAppart(row.D)} className="mt-6 w-96 rounded-xl text-center hover:text-orange-400 text-white">
                                <h3 className="text-2xl font-bold">{row.D}</h3>
                            </a>
                        </td>
                        <td className="text-xl text-white font-light px-6 py-4 whitespace-nowrap hover:bg-[#0c7dad] text-center border-r">
                            <a onClick={() => setSearchAppart(row.E)} className="mt-6 w-96 rounded-xl text-center hover:text-orange-400 text-white">
                                <h3 className="text-2xl font-bold">{row.E}</h3>
                            </a>
                        </td>

                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default TableA;