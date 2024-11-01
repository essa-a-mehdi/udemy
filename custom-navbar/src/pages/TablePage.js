import Table from "../components/Table";

export default function TablePage() {
    const data = [
        { name: 'Orange', color: 'orange', score: 5},
        { name: 'Apple', color: 'red', score: 3},
        { name: 'Banana', color: 'yellow', score: 1},
        { name: 'Lime', color: 'green', score: 4},
    ]

    const config = [
        { label: 'Name', render: (fruit) => fruit.name},
        { label: 'Colour', render: (fruit) => <div className="fruitcolor">{fruit.color}</div>},
        { label: 'Score', render: (fruit) => (
        <div className="fruitcolor" style={{ backgroundColor: fruit.color }}></div>
        )},
        { label: 'Score Squared', render: (fruit) => fruit.score ** 2},
    ];

    return <div>
        <Table data={data} config={config}/>
    </div>
}