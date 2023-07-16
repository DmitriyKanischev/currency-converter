import { IValute } from "../Models";
import CurCard from "../components/CurCard";
import ErrorMessage from "../components/Error";
import Loader from "../components/Loader";
import NavBar from "../components/NavBar";
import TableHead from "../components/TableHead";
import { useCurrency } from "../hooks/CurrencyHook";

const Home = () => {
    const {valute, loading, error} = useCurrency()
    return ( 
        <>
        <NavBar/>

        <div className="bg-slate-700 flex min-h-screen m-0">
            <div className='container mx-auto max-w-5xl flex flex-wrap pt-5'>
            {loading && <Loader/>}
            {error && <ErrorMessage error={error}/>}
            <TableHead />
            {valute?.map(obj => 
                <table className="min-w-full">
                    <tbody>
                        <CurCard valute={obj} />
                    </tbody>
                </table>)}
            </div>
        </div>
        </>
     );
}
 
export default Home;