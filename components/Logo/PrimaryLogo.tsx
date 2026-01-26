interface LogoProps {
    width?: number;
}

export function PrimaryLogo({ width = 300 }: LogoProps) {
    return (
        <svg width={width} height={width * 0.28} viewBox="0 0 400 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Icon */}
            <g>
                {/* Outer circle - represents community/connection */}
                <circle cx="70" cy="70" r="55" fill="#4F46E5" opacity="0.1"/>

                {/* Code brackets */}
                <path d="M45 45 L35 55 L35 85 L45 95" stroke="#4F46E5" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <path d="M95 45 L105 55 L105 85 L95 95" stroke="#4F46E5" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>

                {/* Graduation cap in the middle - represents education */}
                <rect x="55" y="65" width="30" height="4" fill="#3B82F6" rx="1"/>
                <path d="M50 65 L70 55 L90 65" stroke="#3B82F6" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <circle cx="90" cy="65" r="3" fill="#3B82F6"/>
                <line x1="90" y1="68" x2="90" y2="78" stroke="#3B82F6" strokeWidth="2"/>

                {/* Small connecting dots - represents network/connection */}
                <circle cx="70" cy="85" r="3" fill="#4F46E5"/>
            </g>

            {/* Text */}
            <g>
                <text x="155" y="65" fontFamily="system-ui, -apple-system, sans-serif" fontSize="36" fontWeight="700" fill="#164484">
                    Yoursfriend
                </text>

                {/* Tagline */}
                <text x="157" y="118" fontFamily="system-ui, -apple-system, sans-serif" fontSize="14" fontWeight="500" fill="#6aa964" letterSpacing="1">
                    SOFTWARE & TRAINING
                </text>
            </g>
        </svg>
    );
}
