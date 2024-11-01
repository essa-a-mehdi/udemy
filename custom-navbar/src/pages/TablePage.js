import Table from "../components/Table";

export default function TablePage() {
    const data = [
        { name: 'Orange', color: 'orange', score: 5},
        { name: 'Apple', color: 'red', score: 3},
        { name: 'Banana', color: 'yellow', score: 1},
        { name: 'Lime', color: 'green', score: 4},

    ]
    return <div>
        <Table data={data}/>
    </div>
}