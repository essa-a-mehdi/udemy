export default function Table({ data }) {
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
                    <th>Fruit</th>
                    <th>Color</th>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody>{renderedRows}</tbody>
        </table>
    );
}
