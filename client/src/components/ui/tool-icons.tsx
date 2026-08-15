import React from "react";

export const CamtasiaIcon = ({ className = "", size = 24 }) => (
  <img 
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPCXXQ1TkD--jhBkv2vOU2q-QP8EpdM9Ep_g&s"
    alt="Camtasia"
    width={size}
    height={size}
    className={`${className} object-contain`}
  />
);

export const SynthesiaIcon = ({ className = "", size = 24 }) => (
  <img 
    src="https://bizequals.com/media/com_jbusinessdirectory/pictures/companies/70/synthesia-logo-600x450.webp"
    alt="Synthesia"
    width={size}
    height={size}
    className={`${className} object-contain`}
  />
);

export const AdobeCaptivateIcon = ({ className = "", size = 24 }) => (
  <img 
    src="https://helpx-prod.scene7.com/is/image/HelpxProd/cp_appicon_176x168?$png$&jpegSize=100&wid=176"
    alt="Adobe Captivate"
    width={size}
    height={size}
    className={`${className} object-contain`}
  />
);

export const ArticulateStorylineIcon = ({ className = "", size = 24 }) => (
  <img 
    src="https://palinfocom.com/wp-content/uploads/2024/07/ACCL-Articulate-Storyline.png"
    alt="Articulate Storyline"
    width={size}
    height={size}
    className={`${className} object-contain`}
  />
);

export const CanvaIcon = ({ className = "", size = 24 }) => (
  <img 
    src="https://images-eds-ssl.xboxlive.com/image?url=4rt9.lXDC4H_93laV1_eHHFT949fUipzkiFOBH3fAiZZUCdYojwUyX2aTonS1aIwMrx6NUIsHfUHSLzjGJFxxo4K81Ei7WzcnqEk8W.MgwYqB5CRA8i20O0tGyRHzjcEesWcOw9C_zoFBtCCVzOdp5525q92eS773zOx_R7Bakc-&format=source"
    alt="Canva"
    width={size}
    height={size}
    className={`${className} object-contain`}
  />
);

export const FigmaIcon = ({ className = "", size = 24 }) => (
  <img 
    src="https://avatars.githubusercontent.com/u/5155369?s=200&v=4"
    alt="Figma"
    width={size}
    height={size}
    className={`${className} object-contain`}
  />
);

export const Microsoft365Icon = ({ className = "", size = 24 }) => (
  <svg 
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={`${className} object-contain`}
    fill="currentColor"
  >
    <rect x="2" y="2" width="8" height="8" fill="#0078D4" />
    <rect x="14" y="2" width="8" height="8" fill="#50E6FF" />
    <rect x="2" y="14" width="8" height="8" fill="#FFB900" />
    <rect x="14" y="14" width="8" height="8" fill="#107C10" />
  </svg>
);

export const VyondIcon = ({ className = "", size = 24 }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={`${className} object-contain`}
    fill="currentColor"
  >
    <circle cx="12" cy="12" r="10" fill="#FF6B35" />
    <path d="M10 8l6 4-6 4V8z" fill="white" />
  </svg>
);

export const PowerPointIcon = ({ className = "", size = 24 }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={`${className} object-contain`}
    fill="currentColor"
  >
    <rect width="24" height="24" fill="#D83B01" />
    <circle cx="12" cy="12" r="6" fill="white" />
    <path d="M12 8v8M8 12h8" stroke="#D83B01" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);
