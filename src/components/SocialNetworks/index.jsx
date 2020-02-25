import React from 'react';
import './styles.less';

// Material UI
import Link from '@material-ui/core/Link';

const SocialNetworks = (props) => {
    const { data, className } = props;
    console.log(props);
    return (
        <div className={className}>
            {data && data.map((item) => (
                <Link href={item.route} key={item.id}>
                    {item.icon}
                </Link>
            ))}
        </div>
    );
};

export default SocialNetworks;
