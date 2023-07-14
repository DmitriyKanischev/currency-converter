import { IValute } from "../Models";

interface CurrencyProps {
    valute: IValute
}

const CurCard = ({valute}: CurrencyProps) => {
    return ( 
        <>
            <div className="border py-2 px-4 rounded flex max-h-10 max-w-lg items-center justify-between mb-4 mx-auto bg-slate-100" >
                <p>Code: {valute.NumCode}</p>
                <p>Буквенный код: {valute.CharCode}</p>
                <p>Название: {valute.Name}</p>
                <p>{valute.Value}</p>
            </div>
        </>
     );
}
 
export default CurCard;