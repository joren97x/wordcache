interface ChipProps{
    label: string,
    active?: boolean,
    onClick?: () => void
}

export default function Chip ({label, active = false, onClick}: ChipProps) {
    return (
        <button
            onClick={onClick}
            className={`px-4 py-1 rounded-full text-sm font-medium border transition-colors
                ${active
                ? "bg-indigo-500 text-white border-indigo-500"
                : "bg-gray-100 text-gray-700 border-transparent hover:bg-gray-200"
                }`}
            >
            {label}
        </button>
    )
}