export default function Table({ data, config }) {
    const renderedHeaders = config.map((column) => {
        return <th key={column.label}>{column.label}</th>;
    });

    const renderedRows = data.map((fruit) => {
        const renderedCells = [];
        const length = config.length;

        for (let i = 0; i < length; i++) {
            renderedCells.push(
                <td key={config[i].label}>{config[i].render(fruit)}</td>
            );
        }

        return <tr key={fruit.name}>{renderedCells}</tr>;
    });

    return (
        <table>
            <thead>
                <tr>{renderedHeaders}</tr>
            </thead>
            <tbody>
                {renderedRows}
            </tbody>
        </table>
    );
}
