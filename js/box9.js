$(document).ready(function(){ 
    var myChart9 = echarts.init(document.getElementById('box9'));
    option9 = {
        title: {
			text: '产出量/订单量统计',
			textStyle: {
				color: '#1bb4f9'
			}
        },    
        color: ['#1bb4f9', '#006699', '#4cabce'],
     
        xAxis: [
            {
                type: 'category',
                data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                axisLabel: {
					show: true,
					textStyle: {
					  color: '#fff'  //这里用参数代替了
					}
				},
                axisPointer: {
                    type: 'shadow'
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '',
                min: 0,
                max: 250,
                interval: 50,  
                splitLine:{show: false},
                axisLabel: {
                    show: true,
					textStyle: {
					  color: '#fff'  //这里用参数代替了
					},
                    formatter: '{value}'
                }
            },
            {
                type: 'value',
                name: '',
                min: 0,
                max: 25,
                interval: 5,
                splitLine:{show: false},
                axisLabel: {
                    show: true,
					textStyle: {
					  color: '#fff'  //这里用参数代替了
					},
                    formatter: ''
                }
            }
        ],
        series: [
            {
                name: '蒸发量',
                type: 'bar',
                data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
            },
            {
                name: '平均温度',
                type: 'line',
                yAxisIndex: 1,
                data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
            }
        ]
    };
    
    
 

    myChart9.setOption(option9);
    
    

});