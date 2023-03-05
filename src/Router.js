/* 
    Write code for React Router here
Import the Home and About components from 
the component folder. Assign the default
path "/" to the Home component and "/about"
to the About component.

Remember to export the component at the end
*/

import React from 'react'
import { Routes, Route } from 'react-router'
// Write component imports here //
export default function Router() {
return   (
    <Routes>
    <Route path="/" element={<h2>Home</h2>} />;
    <Route path="/about" element={<h2>About</h2>} />;
    </Routes>
)
}
// Start Router function here //
