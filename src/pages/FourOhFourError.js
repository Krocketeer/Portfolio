import React from "react"
import { Link } from 'react-router-dom';

export default function FourOhFourError() {
    return <div id="Error">
        <h1>404</h1>
        <p>Oh hey, it looks like you found a page that doesn't exist.</p>
        <p>Let's <Link to="/"> head back home</Link>.</p>
    </div>
}