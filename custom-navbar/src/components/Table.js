export default function Table({ data, config }) {
    const renderedHeaders = config.map((column) => {
        return <th key={column.label}>{column.label}</th>;
    });

    const renderedRows = data.map((rowData) => {
        const renderedCells = [];
        const length = config.length;

        for (let i = 0; i < length; i++) {
            renderedCells.push(
                <td key={config[i].label}>{config[i].render(rowData)}</td>
            );
        }

        return <tr key={rowData.name}>{renderedCells}</tr>;
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
