export default function DarkModeSwitchComponent() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="35"
      viewBox="0 0 24 24"
      color="black"
      fill="none"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke="currentColor"
      style={{ cursor: "pointer", transform: "rotate(90deg)" }}
    >
      <mask id="circle-mask-14">
        <rect x="0" y="0" width="100%" height="100%" fill="white"></rect>
        <circle r="9" fill="black" style="cx: 100%; cy: 0%;"></circle>
      </mask>
      <circle
        cx="12"
        cy="12"
        fill="black"
        mask="url(#circle-mask-14)"
        style="r: 5px;"
      ></circle>
      <g stroke="currentColor" style="opacity: 1;">
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </g>
    </svg>
  );
}
