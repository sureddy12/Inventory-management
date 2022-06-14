import React from 'react';
import {Bar, Pie} from 'react-chartjs-2';
import Header from '../includes/header'
import Footer from '../includes/footer'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import ProductApi from '../data/ProductApi';
import _ from 'lodash'
// import * as React from "react";
import * as ReactDOM from "react-dom";
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, AccumulationDataLabel, AccumulationTooltip, PieSeries } from '@syncfusion/ej2-react-charts';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

/**
 * super(...arguments);
        this.data = [
            { 'x': 'Chrome', y: 37 }, { 'x': 'UC Browser', y: 17 },
            { 'x': 'iPhone', y: 19 }, { 'x': 'Others', y: 4, text: '4' },
            { 'x': 'Opera', y: 11 }
        ];
 */

        const data = {
            labels: ["guitar",
            "Two Product",
            "Third Product",
            "Ipad",
            "iPad",
            "Mobile"],
            datasets: [
              {
                label: '# of Votes',
                data: [48, 23, 6, 6, 22, 12 ],
                backgroundColor: [
                  'rgba(255, 99, 132)',
                  'rgba(54, 162, 235)',
                  'rgba(255, 206, 86)',
                  'rgba(75, 192, 192)',
                  'rgba(153, 102, 255)',
                  'rgba(255, 159, 64)',
                ],
                // borderColor: [
                //   'rgba(255, 99, 132, 1)',
                //   'rgba(54, 162, 235, 1)',
                //   'rgba(255, 206, 86, 1)',
                //   'rgba(75, 192, 192, 1)',
                //   'rgba(153, 102, 255, 1)',
                //   'rgba(255, 159, 64, 1)',
                // ],
                borderWidth: 1,
              },
            ],
          };

export default class TopViewedProductsPage extends React.Component {
    constructor (props){
    super( props)
    this.state = {
        data: {}
    }
                this.datalabel = { visible: true, position: 'Inside', name: 'text' };
        this.tooltip = { enable: true };
        this.tooltipRender = (args) => {
            let value = args.point.y / args.series.sumOfPoints * 100;
            args.text = args.point.x + '' + Math.ceil(value) + '' + '%';
        }
    }
    componentDidMount(){
        ProductApi.getProductViews(productViews => {
            const grouped = _(productViews).groupBy('productName').value()
            console.log("ProductView", grouped, Object.keys(grouped).map(key => grouped[key].length))
            let labelArray = Object.keys(grouped)
            const data = {
                labels : labelArray,
                datasets: [
                  {
                    label: 'Product Views',
                    backgroundColor: 'rgba(75,192,192,1)',
                    borderColor: 'rgba(0,0,0,1)',
                    borderWidth: 2,
                    data: Object.keys(grouped).map(key => grouped[key].length)
                  }
                ]
            }
            console.log("=========>>>", data)
            this.setState({data})
        })
    }
    
    render() {
        return (
            <>
            <Header />
            <div style={{width:'30%' ,position:'absolute'
                ,left: '33%',
                top:"30%",
                color:"white",
                fontSize:"32px"
            }} className="chart " >
                {/* {console.log("99999",this.state.data)} */}
                <Pie  data={this.state.data ? data:this.state.data}/>
            </div>
            </>
        );
    }
}