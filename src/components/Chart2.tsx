import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts/core';
import { memo } from 'react';

function Chart2() {
  const options = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [20, 100, 50, 30, 50, 20, 130],
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
