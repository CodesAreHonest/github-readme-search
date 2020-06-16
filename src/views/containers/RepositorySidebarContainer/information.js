import React, { Fragment } from 'react';
import Box                 from "@material-ui/core/Box";

import InformationItem from "../../components/InformationItem";
import BusinessIcon    from '@material-ui/icons/Business';
import LocationOnIcon  from '@material-ui/icons/LocationOn';
import EmailIcon       from '@material-ui/icons/Email';
import LinkIcon        from '@material-ui/icons/Link';
import TwitterIcon     from '@material-ui/icons/Twitter';


const RepositorySidebarInformation = () => {
    return (
        <Fragment>
            <Box>
                <InformationItem
                    logo={<BusinessIcon/>}
                    text="Some company"
                />
            </Box>
            <Box>
                <InformationItem
                    logo={<LocationOnIcon/>}
                    text="Some location"
                />
            </Box>
            <Box>
                <InformationItem
                    logo={<EmailIcon/>}
                    text="yinghua@gmail.com"
                />
            </Box>
            <Box>
                <InformationItem
                    logo={<LinkIcon/>}
                    text="Link"
                />
            </Box>
            <Box>
                <InformationItem
                    logo={<TwitterIcon/>}
                    text="@yinghua"
                />
            </Box>
        </Fragment>
    )
};

export default RepositorySidebarInformation