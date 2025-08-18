
const LederDescriptionVector = ({ width }: { width: number | string }) => {
    const height = typeof (width) === 'number' ? width / 1.2: ""

    return (
        <>  

           <svg width={width} height={height} viewBox="0 0 252 119" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M45 0.5L0 48V118.5H252V48H198.5L169 0.5L126 48L95.5 8L64.5 31.5L45 0.5Z" fill="#0A1A2E"/>
</svg>
        </>
    )
}

export default LederDescriptionVector