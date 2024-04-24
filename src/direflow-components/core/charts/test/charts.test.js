import React from 'react';
import renderer from 'react-test-renderer';
import TestRenderer from 'react-test-renderer';
import AnalyticsCharts from "../charts";


const _chartOptionsForMultiChart = {
    responsive: true,
    maintainAspectRatio: true,
    stacked: false,
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          display: false,
        },
        grid: {
          display: false,
          drawBorder: false,
          drawTicks: false,
          drawOnChartArea: false,
        },
      },
      y1: {
        beginAtZero: true,
        grid: {
          drawOnChartArea: false,
        },
      },
      y2: {
        beginAtZero: true,
        type: "linear",
        display: true,
        position: "right",
        setLineDash: [5, 15],
        max: 1,
        grid: {
          drawOnChartArea: false,
        },
      },
    },
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: false,
        text: "Chart.js Chart",
      },
    },
  };
  
  const _chartOptionsWithoutScales = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          display: false,
        },
        grid: {
          display: false,
          drawBorder: false,
          drawTicks: false,
          drawOnChartArea: false,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          display: false,
        },
        grid: {
          display: false,
          drawBorder: false,
          drawTicks: false,
          drawOnChartArea: false,
        },
      },
    },
    plugins: {
      legend: {
        position: "right",
      },
      title: {
        display: false,
        text: "Chart.js Chart",
      },
    },
  };
  
  const _chartOptionsWithScales = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          display: true,
        },
        grid: {
          display: true,
          drawBorder: true,
          drawTicks: true,
          drawOnChartArea: true,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          display: true,
        },
        grid: {
          display: true,
          drawBorder: true,
          drawTicks: true,
          drawOnChartArea: true,
        },
      },
    },
    plugins: {
      legend: {
        position: "top",
      },
    },
  };
  
  const backgroundColor = (labelCount) => {
    let _backgroundColor = [
      "rgba(56, 182, 255, 1)",
      "rgba(103, 89, 162, 1)",
      "rgba(73, 0, 50, 1)",
      "rgba(92, 225, 230, 1)",
      "rgba(23, 135, 186, 1)",
      "rgba(45, 48, 109, 1)",
      "rgba(0, 194, 203, 1)",
      "rgba(0, 106, 162, 1)",
      "rgba(15, 23, 85, 1)",
      "rgba(3, 152, 158, 1)",
      "rgba(171, 194, 228, 1)",
      "rgba(94, 23, 235, 1)",
      "rgba(26, 62, 202, 1)",
      "rgba(140, 82, 255, 1)",
      "rgba(0, 188, 255, 1)",
      "rgba(0, 255, 255, 1)",
      "rgba(203, 108, 230, 1)",
      "rgba(93, 72, 159, 1)",
      "rgba(46, 52, 119, 1)",
      "rgba(255, 102, 196, 1)",
      "rgba(139, 64, 165, 1)",
      "rgba(0, 32, 111, 1)",
      "rgba(255, 87, 87, 1)",
      "rgba(162, 0, 110, 1)",
      "rgba(98, 0, 110, 1)",
      "rgba(255, 22, 22, 1)",
      "rgba(255, 120, 177, 1)",
      "rgba(255, 209, 255, 1)",
      "rgba(255, 145, 77, 1)",
      "rgba(187, 47, 93, 1)",
      "rgba(255, 145, 77, 1)",
      "rgba(187, 47, 93, 1)",
      "rgba(135, 9, 94, 1)",
      "rgba(255, 189, 89, 1)",
      "rgba(118, 132, 39, 1)",
      "rgba(0, 67, 22, 1)",
      "rgba(176, 194, 77, 1)",
      "rgba(108, 161, 76, 1)",
      "rgba(52, 126, 74, 1)",
      "rgba(201, 226, 101, 1)",
      "rgba(41, 158, 120, 1)",
      "rgba(0, 119, 115, 1)",
      "rgba(126, 217, 87, 1)",
      "rgba(0, 185, 128, 1)",
      "rgba(0, 105, 149, 1)",
      "rgba(0, 128, 55, 1)",
      "rgba(29, 192, 154, 1)",
      "rgba(109, 255, 255, 1)",
      "rgba(0, 74, 173, 1)",
      "rgba(136, 34, 133, 1)",
      "rgba(164, 1, 66, 1)",
    ];
    _backgroundColor.length = labelCount;
    return _backgroundColor;
  };
  
  const borderColor = (labelCount) => {
    let _borderColor = [
      "rgba(56, 182, 255, 1)",
      "rgba(103, 89, 162, 1)",
      "rgba(73, 0, 50, 1)",
      "rgba(92, 225, 230, 1)",
      "rgba(23, 135, 186, 1)",
      "rgba(45, 48, 109, 1)",
      "rgba(0, 194, 203, 1)",
      "rgba(0, 106, 162, 1)",
      "rgba(15, 23, 85, 1)",
      "rgba(3, 152, 158, 1)",
      "rgba(171, 194, 228, 1)",
      "rgba(94, 23, 235, 1)",
      "rgba(26, 62, 202, 1)",
      "rgba(140, 82, 255, 1)",
      "rgba(0, 188, 255, 1)",
      "rgba(0, 255, 255, 1)",
      "rgba(203, 108, 230, 1)",
      "rgba(93, 72, 159, 1)",
      "rgba(46, 52, 119, 1)",
      "rgba(255, 102, 196, 1)",
      "rgba(139, 64, 165, 1)",
      "rgba(0, 32, 111, 1)",
      "rgba(255, 87, 87, 1)",
      "rgba(162, 0, 110, 1)",
      "rgba(98, 0, 110, 1)",
      "rgba(255, 22, 22, 1)",
      "rgba(255, 120, 177, 1)",
      "rgba(255, 209, 255, 1)",
      "rgba(255, 145, 77, 1)",
      "rgba(187, 47, 93, 1)",
      "rgba(255, 145, 77, 1)",
      "rgba(187, 47, 93, 1)",
      "rgba(135, 9, 94, 1)",
      "rgba(255, 189, 89, 1)",
      "rgba(118, 132, 39, 1)",
      "rgba(0, 67, 22, 1)",
      "rgba(176, 194, 77, 1)",
      "rgba(108, 161, 76, 1)",
      "rgba(52, 126, 74, 1)",
      "rgba(201, 226, 101, 1)",
      "rgba(41, 158, 120, 1)",
      "rgba(0, 119, 115, 1)",
      "rgba(126, 217, 87, 1)",
      "rgba(0, 185, 128, 1)",
      "rgba(0, 105, 149, 1)",
      "rgba(0, 128, 55, 1)",
      "rgba(29, 192, 154, 1)",
      "rgba(109, 255, 255, 1)",
      "rgba(0, 74, 173, 1)",
      "rgba(136, 34, 133, 1)",
      "rgba(164, 1, 66, 1)",
    ];
    _borderColor.length = labelCount;
    return _borderColor;
  };
  
  const BarArgs = {
    chartPositionClass: "chartContainerHeighted border",
    chartTitle: "Year-wise Transaction Count",
    chartKey: "yearwiseCountBar",
    chartType: "bar",
    chartOptions: _chartOptionsForMultiChart,
    chartData: {
      labels: ["2020", "2021", "2022"],
      datasets: [
        {
          type: "bar",
          fill: false,
          label: "Transaction Count",
          data: [600, 400, 500],
          backgroundColor: backgroundColor(3),
          borderColor: borderColor(3),
          borderWidth: 1,
          yAxisID: "y1",
        },
      ],
    },
  };

  jest.mock('react-chartjs-2', () => {
    const { forwardRef } = require('react');
    const Chart = forwardRef((props, ref)=> <div ref={ref} {...props}></div>);
    return {
      Chart
    };
  });

it('renders Bar Chart without crashing', () => {
    const testRenderer = TestRenderer.create(<AnalyticsCharts {...BarArgs} />);
    testRenderer.unmount()
});
  

it('matches Bar Chart snapshot as expected', () => {
  const renderTree = renderer.create(<AnalyticsCharts {...BarArgs} />);
  expect(renderTree).toMatchSnapshot();
});