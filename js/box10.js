$(document).ready(function(){ 
    var myChart10 = echarts.init(document.getElementById('box10'));
    option10 = {
        title: {
			text: '效率TOP5',
			left: 'left',
			textStyle: {
				color: '#1bb4f9'
			}
        },
        color: ['#1bb4f9', '#006699', '#4cabce'],

        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            axisLabel: {
                show: true,
                textStyle: {
                  color: '#fff'  //这里用参数代替了
                }
            },
        },
        yAxis: {
            type: 'category',
            data: ['张小勇', '朱东俊', '凌云', '陈婷婷', '张元元'],
            axisLabel: {
                show: true,
                textStyle: {
                  color: '#fff'  //这里用参数代替了
                }
            },
        },
        series: [ 
            {
                name: '搜索引擎',
                type: 'bar',
                stack: '总量',
                label: {
                    show: true,
                    position: 'insideRight'
                },
                data: [80, 82, 85, 91, 93]
            }
        ]
    };
        
    myChart10.setOption(option10);
    

});