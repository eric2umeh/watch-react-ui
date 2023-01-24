import React from "react";
import styled from "styled-components";
import { LineChart, Line, Tooltip, ResponsiveContainer} from "recharts";
import Green from "../../assets/images/illustrations/green dot.svg";
import Blue from "../../assets/images/illustrations/blue dot.svg";
import Orange from "../../assets/images/illustrations/orange dot.svg";
import Purple from "../../assets/images/illustrations/purple dot.svg";


export const ChartNoAxis = ({title, percent, unit, desc, data, dataKey}) => {

    return (
        <Container>
            <span className="title">{title}</span>
            <div className="percent-unit">
                <h1 className="percent">{percent}</h1> 
                <span className="unit">{unit}</span>
            </div>
            <p className="desc">{desc}</p>
            <div className="chart">
                <ResponsiveContainer width="99%" aspect={3 / 1}>
                    <LineChart data={data}>
                        <Line type="monotone" dataKey={dataKey} stroke="#8676FF"/>
                        <Tooltip/>
                    </LineChart>
                </ResponsiveContainer>
            </div>

            <div className="table-responsive">
                <div className="table-wrapper">
                    <table className="table table-striped table-hover">
                        <tbody className="table-body">
                            <tr>
                                <td><img src={Green} alt=""/></td>
                                <td>Utako Branch</td>
                                <td>4</td>
                                <td>₦1,540,500</td>
                            </tr>
                            <tr>
                                <td><img src={Blue} alt=""/></td>
                                <td>Edo Palace</td>
                                <td>113</td>
                                <td>₦300,320</td>
                            </tr>
                            <tr>
                                <td><img src={Orange} alt=""/></td>
                                <td>Alaba Oniba Branch</td>
                                <td>30</td>
                                <td>₦14,219,665</td>
                            </tr>
                            <tr>
                                <td><img src={Purple} alt=""/></td>
                                <td>Onitsha City</td>
                                <td>1243</td>
                                <td>₦993</td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div> 
        </Container>
    )
};

export default ChartNoAxis;


const Container = styled.div`
    padding: 10px 10px 20px 20px ;
    background-color: var(--color-light);
    border-radius: var(--bradius-6);
    -webkit-box-shadow: var(--webkitboxshadow-primary);
    box-shadow: var(--boxshadow-primary);

    .title {
        font-size: var(--fsize-4);
        color: var(--color-black-1);
    }

    .percent-unit {
        display: flex;
        color: var(--color-blue-9);
        margin-top: 5px;
    }

    .percent {
        font-size: 38px;
        color: var(--color-blue-9);
        font-weight: var(--fweight-5);
    }

    .unit {
        font-size: var(--fsize-7);
        color: var(--color-blue-9);
        margin-top: 5px;
        margin-left: 5px;
    }

    .desc {
        font-size: var(--fsize-3);
        color: var(--color-blue-9);
    }

    .table-wrapper {
        background: #fff;
        display: block;
        height: 129px;

        @media only screen and (max-width: 978px) {
            background: #fff;
            padding: 0px 5px;
        }
    }

    table {
        width: 100%;
        margin-bottom: 15px;

        @media only screen and (max-width: 855px) {
            max-height: 170px;
        }
    }

    table.table tr th, 
    table.table tr td {
    padding: 7px;
    vertical-align: middle;
    }

    tr td:nth-child(2) {
        color: var(--color-blue-9);
    }

    tr td:nth-child(3) {
        color: #9292C1;
    }

    tr td:nth-child(4) {
        color: var(--color-blue-9);
        display: flex;
        justify-content: end;
    }

    table.table-striped.table-hover tbody tr:hover {
        background: #f5f5f5;
    }
`;
