import React, { useEffect, useState } from "react";
import './ExerciseOne.scss';
import { Range } from '../../components';
import { getMinMaxRange } from '../../services'

/**
 * @component Exercise one page.
 * @returns {React.ReactElement}
 */
export const ExerciseOne = () => {

    const [range, setRange] = useState();

    useEffect(() => {
        getMinMaxRange()
            .then(range => setRange(range));
    }, []);

    return (
        <div className="exercise-one">
            <h1>Exercise 1</h1>
            {range && <Range range={range} />}
        </div>
    );
};
