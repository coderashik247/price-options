import React from 'react';
import { LineChart, Line, XAxis, YAxis  } from 'recharts';

const Linechart = () => {

    const allMarks = [
        { "id": 1, "name": "Alice", "math": 88, "physics": 79, "chemistry": 84 },
        { "id": 2, "name": "Bob", "math": 76, "physics": 85, "chemistry": 80 },
        { "id": 3, "name": "Charlie", "math": 92, "physics": 91, "chemistry": 89 },
        { "id": 4, "name": "David", "math": 68, "physics": 74, "chemistry": 70 },
        { "id": 5, "name": "Ella", "math": 85, "physics": 89, "chemistry": 78 },
        { "id": 6, "name": "Frank", "math": 74, "physics": 67, "chemistry": 75 },
        { "id": 7, "name": "Grace", "math": 91, "physics": 94, "chemistry": 88 },
        { "id": 8, "name": "Hannah", "math": 78, "physics": 80, "chemistry": 76 },
        { "id": 9, "name": "Ian", "math": 83, "physics": 73, "chemistry": 85 },
        { "id": 10, "name": "Jane", "math": 95, "physics": 90, "chemistry": 92 }
    ]

    return (
        <div>
            <LineChart width={1200} height={400} data={allMarks}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math" stroke='red'></Line>
                <Line dataKey="physics" stroke='green'></Line>
                <Line dataKey="chemistry" stroke='blue'></Line>
            </LineChart>
        </div>
    );
};

export default Linechart;