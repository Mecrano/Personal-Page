import React from 'react';
import './styles.less';

// Material UI
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

// Custom Component
import TitleWriting from '../TitleWriting';

const Parallax = (props) => {
    const {
        title, words, description, socialNetworks,
    } = props;

    return (
        <section className="mainParallax">
            <div>
                <TitleWriting title={title} words={words} />
                <Typography variant="h5">
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
