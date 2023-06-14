export default function Statistic({num, category}) {
    const styling = {
        display: "flex",
        flexDirection: "column"
    }
    return (
    <div style={styling} className="statistic_component">
        <h4>{num}</h4>
        <p>{category}</p>
    </div>
    )
}