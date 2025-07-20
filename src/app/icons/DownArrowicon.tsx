import { WDXL_Lubrifont_JP_N } from "next/font/google"

interface DownArrowiconProps {
    width: string | number,
    height: string | number,
    color: string
}

const DownArrowicon = ({ height, width, color }: DownArrowiconProps) => {
    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24">
                <path fill="#f0f0f0" d="m12 10.828l-4.95 4.95l-1.414-1.414L12 8l6.364 6.364l-1.414 1.414z" />
            </svg>
        </div>
    )
}

export default DownArrowicon