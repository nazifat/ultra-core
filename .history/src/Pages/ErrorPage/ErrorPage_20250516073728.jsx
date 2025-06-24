import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError(); // ← Add this line to get the error

    return (
        <div id="error-page" className="text-center p-8">
            <h1 className="text-3xl font-bold mb-4">Oops!</h1>
            <p className="mb-2">Sorry, an unexpected error has occurred.</p>
            <p className="text-red-500">
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
};

export default ErrorPage;
