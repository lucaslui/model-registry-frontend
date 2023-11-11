import React from 'react';
import { Link } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";

import './breadcrumb.scss';

const BreadCrumb: React.FC = () => {
    const breadcrumbs = useBreadcrumbs(
        [
            { path: "/", breadcrumb: "Tabela" },
            { path: "/:modelId", breadcrumb: "Modelo" },
        ]
    );

    return (
        <div className="breadcrumbs">
            {breadcrumbs.map(({ breadcrumb, match }, index) => (
                <div className="breadcrumb-item" key={match.pathname}>
                    <Link to={match.pathname || ""}>{breadcrumb}</Link>
                    {index < breadcrumbs.length - 1 && ">"}
                </div>
            ))}
        </div>
    );
}

export default BreadCrumb