import React, { Fragment } from 'react';
import Box                 from "@material-ui/core/Box";

import InformationItem from "../../components/InformationItem";
import BusinessIcon    from '@material-ui/icons/Business';
import LocationOnIcon  from '@material-ui/icons/LocationOn';
import EmailIcon       from '@material-ui/icons/Email';
import TwitterIcon     from '@material-ui/icons/Twitter';


const RepositorySidebarInformation = ({ location, company, email, twitter }) => {
    return (
        <Fragment>
            {company && <Box>
                <InformationItem
                    logo={<BusinessIcon/>}
                    text={company}
                />
            </Box>}
            {location && <Box>
                <InformationItem
                    logo={<LocationOnIcon/>}
                    text={location}
                />
            </Box>}
            {email && <Box>
                <InformationItem
                    logo={<EmailIcon/>}
                    text={email}
                />
            </Box>}
            {twitter && <Box>
                <InformationItem
                    logo={<TwitterIcon/>}
                    text={twitter}
                />
            </Box>}
        </Fragment>
    )
};

RepositorySidebarInformation.defaultProps = {
    location: '',
    company : '',
    email   : '',
    twitter : ''
};

export default RepositorySidebarInformation