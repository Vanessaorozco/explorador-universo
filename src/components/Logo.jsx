export default function Logo() {
  return (
    <div className="flex items-center gap-2 font-black tracking-tight text-white" aria-label="Logo Explorador">
      <svg
        className="h-8 w-8 text-cyanBrand"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="24" cy="24" r="19" stroke="currentColor" strokeWidth="4" />
        <path
          d="M12 25c8-10 16-10 24 0M16 34c6-5 12-5 18 0M24 5c4 7 4 31 0 38"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
      <span className="text-lg">Explorador</span>
    </div>
  );
}
