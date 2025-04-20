import { Link, useRouteError } from "react-router-dom";
import { Button, Result } from 'antd';

export default function ErrorPage() {
    const error = useRouteError();
    console.log('error: ', error);

    return (
        <Result
            status="404"
            title="Oops!"
            // Add fallback text if error or properties are undefined
            subTitle={error?.statusText || error?.message || "Something went wrong."}
            extra={
                <Link to="/">
                    <Button type="primary">Back Home</Button>
                </Link>
            }
        />
    );
}