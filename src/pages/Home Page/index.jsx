import React from 'react';
import './styles.less';

// Material UI
import Typography from '@material-ui/core/Typography';

// Custom Component
import Header from '../../components/Header';
import Parallax from '../../components/Parallax';
import TypeWriter from '../../components/TypeWriter';
import SocialNetworks from '../../components/SocialNetworks';

// Config
import { parallaxData } from '../../config';

const HomePage = () => (
    <>
        <Header />
        <Parallax id="home">
            <TypeWriter titles={parallaxData.titles} />
            <Typography variant="body1" className="descriptionText">
                {parallaxData.description}
            </Typography>
            <SocialNetworks data={parallaxData.socialNetworks} className="socialNetworks" />
        </Parallax>
    </>
);

export default HomePage;
