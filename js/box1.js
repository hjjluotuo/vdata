$(document).ready(function(){ 
    var myChart1 = echarts.init(document.getElementById('box1'));
	var app = {}  
	
	app.config = {
		rotate: 90,
		align: 'left',
		verticalAlign: 'middle',
		position: 'insideBottom',
		distance: 15,
		onChange: function () {
			var labelOption = {  
				normal: {
					rotate: app.config.rotate,
					align: app.config.align,
					verticalAlign: app.config.verticalAlign,
					position: app.config.position,
					distance: app.config.distance
				}
			};
			myChart.setOption({
				label: {
					textStyle: {
						color: 'rgba(255, 255, 255, 1)'
					}
				},
				textStyle: {
					color: '#fff'
				},
				series: [{
					label: labelOption
				}, {
					label: labelOption
				}, {
					label: labelOption
				}, {
					label: labelOption
				}]
			});
		}
	};	
	var labelOption = {
		show: true, 
		position: app.config.position,
		distance: app.config.distance,
		align: app.config.align,
		verticalAlign: app.config.verticalAlign,
		rotate: app.config.rotate,
		formatter: '{name|{a}}',
		fontSize: 12,
		rich: {
			name: {
				textBorderColor: '#fff'
			}
		}
	};

	option1 = { 
		title: {
			text: '完工数',
			textStyle: {
				color: '#1bb4f9'
			}
		},
		color: ['#1bb4f9', '#006699', '#4cabce'],
		
		legend: {
			data: ['Forest', 'Steppe', 'Desert'],
			textStyle: {
				color: '#fff'
			}
		}, 
		xAxis: [
			{
				type: 'category',
				axisTick: {show: false},
				data: ['产线1', '产线2', '产线3', '产线4', '产线5'],
				barGap: '30%',
				axisLabel: {
					show: true,
					textStyle: {
					  color: '#fff'  //这里用参数代替了
					}
				},
			}
		],
		yAxis: [
			{
				type: 'value', 
				axisLabel: {
					show: true,
					textStyle: {
					  color: '#fff'  //这里用参数代替了
					}
				},
			}
		],
		series: [ 
			{
				name: '',
				type: 'bar',
				label: labelOption,
				data: [220, 182, 191, 234, 290],
				showBackground: true,
				backgroundStyle: {
					color: '#fff'
				} 
			}
		]
	};
	myChart1.setOption(option1);

});