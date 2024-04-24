import React, { useEffect, useRef, useState } from 'react';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  ArcElement,
  BarElement,
  PointElement,
  LineElement,
  LineController,
  BarController,
  DoughnutController,
  PieController,
} from 'chart.js';

import { Chart } from 'react-chartjs-2';

import {
  getElementAtEvent,
} from 'react-chartjs-2';
import ModalPopup from '../modal/modal';

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  ArcElement,
  BarElement,
  PointElement,
  LineElement,
  LineController,
  BarController,
  DoughnutController,
  PieController
);

const AnalyticsCharts = props => {
  const chartRef = useRef();
  
  const onChartClick = event => {
    const { current: chart } = chartRef;
    if (!chart) return;
    const element = getElementAtEvent(chart, event);
    if (!element?.length) return;
    if (props.chartClicked)
      props.chartClicked(
        props?.chartData?.labels[element[0].index],
        props.chartData.datasets[element[0].datasetIndex].data[element[0].index]
      );
  };

  return (

    <div className={props.chartPositionClass}>
      {props?.chartTitle?.length > 0 && (
        <span className="chartTitle">{props.chartTitle}</span>
      )}
      <Chart
        ref={chartRef}
        type={props.chartType}
        options={props.chartOptions}
        data={props.chartData}
        onClick={e => onChartClick(e)}
      />
    </div>
  );
};
export default AnalyticsCharts;
export const nullChecker = cell => (!cell ? '-' : cell);
