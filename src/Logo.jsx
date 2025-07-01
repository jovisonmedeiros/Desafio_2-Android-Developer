
import React from 'react';

const Logo = ({ width = 120, height = 120 }) => (
    <svg width={width} height={height} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <style>
            {`
                .page-right-1 { fill: #0077B6; }
                .page-right-2 { fill: #0096C7; }
                .page-right-3 { fill: #00B4D8; }
                .page-left-1 { fill: #0077B6; }
                .page-left-2 { fill: #0096C7; }
                .page-left-3 { fill: #00B4D8; }
                .bubble-1 { fill: #00B4D8; }
                .bubble-2 { fill: #0096C7; }
                .bubble-3 { fill: #48CAE4; }
                .bubble-4 { fill: #90E0EF; }
            `}
        </style>
        {/* Bubbles */}
        <circle cx="50" cy="15" r="3" className="bubble-1"/>
        <circle cx="58" cy="25" r="5" className="bubble-2"/>
        <circle cx="45" cy="35" r="8" className="bubble-3"/>
        <circle cx="52" cy="50" r="4" className="bubble-4"/>

        {/* Pages */}
        <path d="M50 65 L5 80 L5 100 L50 80 Z" className="page-left-1"/>
        <path d="M50 65 L 95 80 L 95 100 L 50 80 Z" className="page-right-1"/>

        <path d="M50 65 L 10 75 L 10 95 L 50 75 Z" className="page-left-2"/>
        <path d="M50 65 L 90 75 L 90 95 L 50 75 Z" className="page-right-2"/>

        <path d="M50 65 L 15 70 L 15 90 L 50 70 Z" className="page-left-3"/>
        <path d="M50 65 L 85 70 L 85 90 L 50 70 Z" className="page-right-3"/>
    </svg>
);

export default Logo;