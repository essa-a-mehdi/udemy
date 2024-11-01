export default function Table({ data, config }) {

    const renderedHeaders = config.map((column) => {
        return <th key={column.label}>{column.label}</th>
    })
    const renderedRows = data.map((fruit) => {
        return (
            <tr key={fruit.name}>
                <td>{fruit.name}</td>
                <td>
                    <div style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: fruit.color,
                    }}></div>
                </td>
                <td>{fruit.score}</td>
            </tr>
        );
    });

    return (
        <table>
            <thead>
                <tr>
                    {renderedHeaders}
                </tr>
            </thead>
            <tbody>{renderedRows}</tbody>
        </table>
    );
}
