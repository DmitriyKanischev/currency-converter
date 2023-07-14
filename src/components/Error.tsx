
interface ErrorMessageProps {
    error: string
}

const ErrorMessage = ({error}: ErrorMessageProps) => {
    return ( 
        <>
            <div >
                <h2 className="mx-auto flex items-center justify-center">{error}</h2>
            </div>
        </>
     );
}
 
export default ErrorMessage;