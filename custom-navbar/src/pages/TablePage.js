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
        { label: 'Colour', render: (fruit) => fruit.color},
        { label: 'Score', render: (fruit) => fruit.score},
    ];

    return <div>
        <Table data={data} config={config}/>
    </div>
}