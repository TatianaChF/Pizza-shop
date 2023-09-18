import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div>
            <h1>Ууупс!</h1>
            <p role="paragraph">К сожалению, произошла непредвиденная ошибка.</p>
            <p role="error">
                {(error as Error)?.message ||
                    (error as { statusText?: string })?.statusText
                }
            </p>
            <p role="link">
                <Link to="/">На главную</Link>
            </p>
        </div>
    );
}

export default ErrorPage;