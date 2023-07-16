import { useState } from "react";
import NavBar from "../components/NavBar";
import SelectField from "../components/SelectField";
import { useCurrency } from "../hooks/CurrencyHook";

const ConvertPage = () => {
    const {valute} = useCurrency()
    const [num, setNum] = useState("1")

    const handleChange = ({target}: any) => {
        setNum(target.value)
    }

    const test = () => {
        return +num * 50;
    }

    const charCodesArr: string[] = []
    valute?.map(obj => {
        charCodesArr.push(obj.CharCode)
    })

    return ( 
        <>
            <NavBar/>
            <div className="bg-slate-700 flex h-screen m-0">
                <div className="container mx-auto max-w-6xl flex pt-5">
                    <div className="flex flex-col w-1/3 ml-auto mr-28" >
                        <div className="flex mb-2">
                            {/* <div className="w-20 h-10 mr-1 bg-slate-100 py-[8px] cursor-pointer border rounded text-center">RUR</div>
                            <div className="w-20 h-10 mr-1 bg-slate-100 py-[8px] cursor-pointer border rounded text-center">USD</div>
                            <div className="w-20 h-10 mr-1 bg-slate-100 py-[8px] cursor-pointer border rounded text-center">EUR</div> */}


                            {/* <div className="w-20 h-10 bg-slate-100 py-[8px] cursor-pointer border rounded text-center">...</div> */}
                            <SelectField
                                defaultOption="..."
                                options={charCodesArr}
                                name='valute'
                                // onChange={handleChange}
                                value={charCodesArr}
                        />

                        </div>
                        <input 
                            type="number" 
                            className="border py-2 px-4 rounded flex flex-col text-4xl h-48  items-center justify-between mb-4 bg-slate-100"
                            value={num}
                            onChange={handleChange}
                            />
                    </div>

                    <div className="flex flex-col w-1/3 mr-auto">
                        <div className="flex mb-2">
                            {/* <div className="w-20 h-10 mr-1 bg-slate-100 py-[8px] cursor-pointer border rounded text-center">RUR</div>
                            <div className="w-20 h-10 mr-1 bg-slate-100 py-[8px] cursor-pointer border rounded text-center">USD</div>
                            <div className="w-20 h-10 mr-1 bg-slate-100 py-[8px] cursor-pointer border rounded text-center">EUR</div> */}
                            {/* <div className="w-20 h-10 bg-slate-100 py-[8px] cursor-pointer border rounded text-center">...</div> */}
                            <SelectField
                                defaultOption="..."
                                options={charCodesArr}
                                name='valute'
                                value={charCodesArr}
                            />
                        </div>
                        <input 
                            type="number" 
                            className="border py-2 px-4 rounded flex flex-col text-4xl h-48 items-center justify-between mb-4 bg-slate-100"
                            value={test()} />
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default ConvertPage;