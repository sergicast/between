import React, { useEffect, useState } from "react";
import './exerciseTwo.scss';

import { Range } from '../../components';
import { getStaticsRanges } from '../../services';


export const ExerciseTwo = () => {

    const [staticRange, setStaticRange] = useState();

    useEffect(() => {
        getStaticsRanges()
            .then(range => setStaticRange(range));
    }, []);

    return (
        <div className="exercise-one">
            <h1>Exercise 2</h1>
            {
                staticRange &&
                <Range
                    range={{
                        min: staticRange[0],
                        max: staticRange[staticRange.length - 1]
                    }}
                    staticRange={staticRange}
                />
            }
        </div>
    );
};
