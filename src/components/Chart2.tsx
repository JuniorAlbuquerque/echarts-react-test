import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts/core';
import { memo } from 'react';

interface IChart {
  data: number[]
}

function Chart2({ data }: IChart) {
  const options = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: data,
        type: 'line',
        showBackground: true,
        backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)'
        }
    }],
    tooltip: {
      trigger: 'axis',
    },
  };

  return (
    <div className="Chart">
      <ReactECharts option={options} echarts={echarts} />
    </div>
  );
}

export default memo(Chart2);
