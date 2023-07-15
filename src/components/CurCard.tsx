import { IValute } from "../Models";

interface CurrencyProps {
    valute: IValute
}

const CurCard = ({valute}: CurrencyProps) => {
    console.log(valute)
    const classForValue = "text-sm w-1/3 font-bold px-6 py-4 whitespace-nowrap text-left"
    const createClassName = () => {
        return valute.Previous < valute.Value ? classForValue + " text-red-500" : classForValue + " text-lime-500";
    }
    return ( 
        <>
            <tr className="bg-gray-200 border-b border border-slate-600" key={valute.ID}>
                <td className="px-6 py-4 w-1/5  whitespace-nowrap text-sm font-medium text-gray-900 text-left">
                    {valute.NumCode}
                </td>
                <td className="text-sm w-1/5 text-gray-900 font-light px-6 py-4 whitespace-nowrap text-left">
                    {valute.CharCode}
                </td>
                <td className="text-sm w-1/2 text-gray-900 font-light px-6 py-4 whitespace-nowrap text-left">
                    {valute.Name}
                </td>
                <td className={createClassName()}>
                    {valute.Value}
                </td>
                <td className="text-sm w-1/3 text-gray-900 font-medium px-6 py-4 whitespace-nowrap text-left">
                    RUB
                </td>
            </tr>
        </>
     );
}
 
export default CurCard;