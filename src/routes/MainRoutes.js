import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { ExerciseOne, ExerciseTwo } from '../pages';

/**
 * @component App routes pages.
 * @returns {React.ReactElement}
 */
export const MainRoutes = function () {

    return (
        <Routes>
            <Route path="/" element={<Navigate to='/exercise-one' />} />
            <Route path="/exercise-one" element={<ExerciseOne />} />
            <Route path="/exercise-two" element={<ExerciseTwo />} />
            <Route path="*" element={<h1>No existe esta ruta</h1>} />
        </Routes>
    );
};
