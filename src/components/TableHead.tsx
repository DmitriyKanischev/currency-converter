
const TableHead = () => {
    return ( 
        <>
        <table className="border-b min-w-full">
                <tr >
                    <th scope="col" className="border w-1/5 border-slate-600 bg-slate-400 text-sm font-medium text-gray-900 px-6 py-4 text-left">Код</th>
                    <th scope="col" className="border w-1/5 border-slate-600 bg-slate-400 text-sm font-medium text-gray-900 px-6 py-4 text-left">Букв. обозначение</th>
                    <th scope="col" className="border w-1/2 border-slate-600 bg-slate-400 text-sm font-medium text-gray-900 px-6 py-4 text-left">Название</th>
                    <th scope="col" className="border w-1/3 border-slate-600 bg-slate-400 text-sm font-medium text-gray-900 px-6 py-4 text-left">Курс</th>
                    <th scope="col" className="border w-1/3 border-slate-600 bg-slate-400 text-sm font-medium text-gray-900 px-6 py-4 text-left">Валюта</th>
                </tr>
            </table>
        </>
     );
}
 
export default TableHead;