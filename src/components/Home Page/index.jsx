import React from 'react';
import { Paper } from '@material-ui/core';

const HomePage = () => (
    <>
        <section>
            <div>
                <Paper>
                        Edwin Obando test
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
