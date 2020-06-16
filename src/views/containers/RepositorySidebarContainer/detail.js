import React, { Fragment } from "react";
import PropTypes           from "prop-types";
import H5                  from "../../components/H5";
import BodyFont            from "../../components/BodyFont";

const RepositorySidebarDetail = ({ name, username }) => {
    return (
        <Fragment>
            <H5>{name}</H5>
            <BodyFont>{username}</BodyFont>
        </Fragment>
    )
};

RepositorySidebarDetail.propTypes = {
    name    : PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
};

export default RepositorySidebarDetail;