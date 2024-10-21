import React from 'react'
import logWebsite from '../../assets/img/logo-web.svg';

const LogoWebSite = ( { className } ) => {
    return (
        <picture>
            <img className={className} src={logWebsite} alt="logo del sitio web" />
        </picture>
    )
}
export default LogoWebSite;