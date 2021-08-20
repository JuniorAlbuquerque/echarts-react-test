import ReactECharts from 'echarts-for-react';
import { memo } from 'react';

interface IChart {
  data: number[]
}

function Chart({ data }: IChart) {
  
  const options = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
      name: 'bar',
      type: 'bar',
      data: data,
      emphasis: {
          focus: 'series'
      },
    }],
    tooltip: {
      trigger: 'axis',
    },
    animation: true,
    animationThreshold: 2000,
    animationEasing: 'bounceInOut',
    animationDelayUpdate: function (idx: any) {
        return idx * 100;
    },
};

  return (
    <div className="Chart">
      <ReactECharts option={options} notMerge={true} lazyUpdate={true} theme="dark"/>
    </div>
  );
}

export default memo(Chart);
