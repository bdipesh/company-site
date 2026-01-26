interface LogoProps {
    width?: number;
}

export function MinimalLogo({ width = 300 }: LogoProps) {
    return (
        <svg width={width} height={width * 0.28} viewBox="0 0 500 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Simplified Icon */}
            <g>
                {/* Code brackets - thinner */}
                <path d="M50 50 L42 60 L42 80 L50 90" stroke="#4F46E5" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <path d="M90 50 L98 60 L98 80 L90 90" stroke="#4F46E5" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>

                {/* Simplified graduation cap */}
                <path d="M55 70 L70 62 L85 70" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <line x1="85" y1="70" x2="85" y2="78" stroke="#3B82F6" strokeWidth="2"/>
            </g>

            {/* Text - simplified */}
            <g>
                <text x="125" y="72" fontFamily="system-ui, -apple-system, sans-serif" fontSize="38" fontWeight="600" fill="#0F172A">
                    yoursfriend labs
                </text>

                {/* Tagline */}
                <text x="127" y="95" fontFamily="system-ui, -apple-system, sans-serif" fontSize="12" fontWeight="400" fill="#64748B" letterSpacing="0.5">
                    software & training
                </text>
            </g>
        </svg>
    );
}
