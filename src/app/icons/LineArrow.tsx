
const LineArrow = ({ size, color }: { size: number  , color: string}) => {
let height = size+10
let width = (size+10 )* 3.2
    return (
        <>

   
            <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none">
                <path d="M63.3334 5.20825V19.7916L74.7917 12.4999L63.3334 5.20825Z" fill={color} />
                <line x1="0.984375" y1="12.5" x2="65.0501" y2="12.5" stroke={color} strokeWidth="2" />
            </svg>
        </>
    )
}

export default LineArrow