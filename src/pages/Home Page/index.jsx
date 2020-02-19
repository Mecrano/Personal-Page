import React from 'react';

// Material UI
import { Paper } from '@material-ui/core';


// Custom Component
import Header from '../../components/Header';

const HomePage = () => (
    <>
        <Header />
        <section>
            <div>
                <Paper>
                        Edwin Obando - Pagina en mantenimiento
                </Paper>
            </div>
        </section>
        <div className="copyright">
            <span>
                    Copyright © 2020
                <a href="https://edwinobando.com/">
                    <b>
                        {' Edwin Obando'}
                    </b>
                </a>
            </span>
        </div>
    </>
);

export default HomePage;
