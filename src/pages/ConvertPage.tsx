import { useState } from "react";
import NavBar from "../components/NavBar";
import { useCurrency } from "../hooks/CurrencyHook";

const ConvertPage = () => {
    const {valute} = useCurrency()
    const [num, setNum] = useState("1");
    const [data, setData] = useState()
    const [data2, setData2] = useState()

    const handleChange = ({target}: any) => {
        setData(target.value)
        console.log(target.value)
    }
    const handleChange2 = ({target}: any) => {
        setData2(target.value)
        console.log(target.value)
    }
    
    const handleChangeInput = ({target}: any) => {
        setNum(target.value)
    }

    const CalcPrice = () => {
        let i;
        let j;
        for (let obj of valute) {
            if(obj.CharCode === data) {
                i = obj.Value
            }
        }
        for (let obj of valute) {
            if(obj.CharCode === data2) {
                j = obj.Value
            }
        }
        let result = (Number(i) / Number(j) * Number(num))
        return result.toFixed(3)
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
                            <select
                                className="w-20 h-10 bg-slate-100 py-[8px] cursor-pointer border rounded text-center"
                                id="inputValue"
                                name="inputValue"
                                defaultValue="..."
                                onChange={handleChange}
                            >
                                <option disabled value="">...</option>
                                {charCodesArr && charCodesArr.map(option => 
                                    <option
                                    value={option}
                                    key={option}
                                    selected={option === data}
                                    >
                                        {option}
                                    </option>
                                    )}

                            </select>
                        </div>
                        <input 
                            type="number" 
                            className="border py-2 px-4 rounded flex flex-col text-4xl h-48  items-center justify-between mb-4 bg-slate-100"
                            value={num}
                            onChange={handleChangeInput}
                            />
                    </div>

                    <div className="flex flex-col w-1/3 mr-auto">
                        <div className="flex mb-2">
                            <select
                                className="w-20 h-10 bg-slate-100 py-[8px] cursor-pointer border rounded text-center"
                                id="outputValue"
                                name="outputValue"
                                defaultValue="..."
                                onChange={handleChange2}
                            >
                                <option disabled value="">...</option>
                                {charCodesArr && charCodesArr.map(option => 
                                    <option
                                    value={option}
                                    key={option}
                                    selected={option === data2}
                                    >
                                        {option}
                                    </option>
                                    )}
                            </select>
                        </div>
                        <input 
                            type="number" 
                            className="border py-2 px-4 rounded flex flex-col text-4xl h-48 items-center justify-between mb-4 bg-slate-100"
                            value={CalcPrice()}
                            disabled />
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default ConvertPage;