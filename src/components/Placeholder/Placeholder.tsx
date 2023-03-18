import React from "react";
import ContentLoader from "react-content-loader";

const Placeholder = (props: any) => (
    <ContentLoader
        speed={2}
        width={280}
        height={500}
        viewBox="0 0 280 500"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="138" cy="138" r="138" />
        <rect x="140" y="320" rx="0" ry="0" width="23" height="2" />
        <rect x="168" y="170" rx="0" ry="0" width="0" height="1" />
        <rect x="0" y="298" rx="10" ry="10" width="280" height="30" />
        <rect x="0" y="348" rx="10" ry="10" width="280" height="88" />
        <rect x="0" y="450" rx="10" ry="10" width="95" height="30" />
        <rect x="123" y="445" rx="25" ry="25" width="152" height="45" />
    </ContentLoader>
)

export default Placeholder;

