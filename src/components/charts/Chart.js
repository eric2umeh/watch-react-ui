import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer} from "recharts";
import styled from 'styled-components';

export default function Charts({title, data, dataKey, dataKeyTwo, grid}) { 

    return ( 
        <Container>
            <span className="chartTitle">{title}</span>
            <div className="chart">
                <ResponsiveContainer width="99%" aspect={4 / 1}>
                    <LineChart data={data}>
                        <XAxis dataKey="name" stroke="#999999"/>
                        <YAxis dataKeyTwo="name" stroke="#999999"/>
                        <Line type="monotone" dataKey={dataKey} stroke="#0066FF"/>
                        <Legend />
                        <Tooltip/>
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </Container>
    )
}


const Container = styled.div`
    /* margin: 20px; */
    padding: 10px;
    border-radius: var(--bradius-7);
    background-color: var(--color-light);
    -webkit-box-shadow: var(--webkitboxshadow-primary);
    box-shadow: var(--boxshadow-primary);

    .chartTitle {
        margin: 30px;
        color: var(--color-black-2);
        font-weight: var(--fweight-6);
        line-height: var(--lheight-7);
        font-size: 17px;
    }

    .chart {
        margin-top: 30px;
    }
`;