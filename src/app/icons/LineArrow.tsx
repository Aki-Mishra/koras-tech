
const LineArrow = ({ size, color }: { size: number  , color: string}) => {
let height = size+10
let width = (size+10 )* 3.2
    return (
        <>

   
            <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" className="ease-in duration-200 transition-all">
                <path d="M63.3334 5.20825V19.7916L74.7917 12.4999L63.3334 5.20825Z" fill={color} className="ease-in duration-200 transition-all" />
                <line x1="0.984375" y1="12.5" x2="65.0501" y2="12.5" stroke={color} strokeWidth="1" className="ease-in duration-200 transition-all" />
            </svg>
        </>
    )
}

export default LineArrow