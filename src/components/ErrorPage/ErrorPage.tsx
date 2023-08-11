import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div>
            <h1>Ууупс!</h1>
            <p>К сожалению, произошла непредвиденная ошибка.</p>
            <p>
                {(error as Error)?.message ||
                    (error as { statusText?: string })?.statusText
                }
            </p>
            <p>
                <Link to="/">На главную</Link>
            </p>
        </div>
    );
}

export default ErrorPage;