import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { ExternalLink } from 'react-external-link';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import '../App.css';

const SocialIcons = () => {

    const socialIcons = [
        {
            icon: <GitHubIcon />,
            href: 'https://github.com/MartinVeltman',
        },
        {
            icon: <InstagramIcon />,
            href: 'https://twitter.com/mupa_mmbetsa',
        },
        {
            icon: <LinkedInIcon />,
            href: 'https://www.linkedin.com/in/martin-veltman/',
        },
    ];

    const getSocialIcons = () => socialIcons.map(({ icon, href }) => (
        <span key={uuidv4()}>
            <ExternalLink href={href} className="icons">
                {icon}
            </ExternalLink>
        </span>
    ));

    return (
        <>
            <h3>LETS CONNECT</h3>
            <span>{getSocialIcons()}</span>
        </>
    );
};

SocialIcons.defaultProps = {
    props: () => { },
};

SocialIcons.propTypes = {
    props: PropTypes.func,
};

export default SocialIcons;
