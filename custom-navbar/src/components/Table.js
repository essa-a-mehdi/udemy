export default function Table({ data, config }) {

    const renderedHeaders = config.map((column) => {
        return <th key={column.label}>{column.label}</th>
    })

    const renderedRows = data.map((fruit) => {
        return (
            <tr key={fruit.name}>
                <td>{config[0].render(fruit)}</td>
                <td>{config[1].render(fruit)}</td>
                <td>{config[2].render(fruit)}</td>
            </tr>
        );
    });

    return (
        <table>
            <thead>
                <tr>{renderedHeaders}</tr>
            </thead>
            <tbody>{renderedRows}</tbody>
        </table>
    );
}
