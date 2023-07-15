
const TableHead = () => {
    return ( 
        <>
        <thead className="border-b">
                <tr >
                    <th scope="col" className="border w-1/5 border-slate-600 text-sm font-medium text-gray-900 px-6 py-4 text-left">Code</th>
                    <th scope="col" className="border w-1/5 border-slate-600 text-sm font-medium text-gray-900 px-6 py-4 text-left">Num Code</th>
                    <th scope="col" className="border w-1/3 border-slate-600 text-sm font-medium text-gray-900 px-6 py-4 text-left">Char Code</th>
                    <th scope="col" className="border w-1/3 border-slate-600 text-sm font-medium text-gray-900 px-6 py-4 text-left">Name</th>
                </tr>
            </thead>
        </>
     );
}
 
export default TableHead;