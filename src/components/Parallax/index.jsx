import React from 'react';
import './styles.less';

// Material UI
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

// Custom Component
import TypeWriter from '../TypeWriter';

const Parallax = (props) => {
    const {
        titles, description, socialNetworks,
    } = props;

    return (
        <section className="mainParallax">
            <div>
                <TypeWriter titles={titles} />
                <Typography variant="body1" className="descriptionText">
                    {description}
                </Typography>
                {socialNetworks && socialNetworks.map((item) => (
                    <Link href={item.route} key={item.id}>
                        {item.icon}
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default Parallax;
