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
        data: data,
        type: 'bar',
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
      <ReactECharts option={options} notMerge={true} lazyUpdate={true}/>
    </div>
  );
}

export default memo(Chart);
