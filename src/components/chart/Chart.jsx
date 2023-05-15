import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './chart.css'

const Chart = ({title, data, dataKey, grid}) => {
    return (
        <div className='chart'>
            <h3 className="chartTitle">{title}</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>
                    {grid && <CartesianGrid strokeDasharray="5 5" />}
                    <XAxis dataKey="name" stroke='#5550bd'/>
                    <Tooltip />
                    <Line type="monotone" dataKey={dataKey} stroke="#5550bd"/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default Chart;
