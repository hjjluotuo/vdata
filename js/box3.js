$(document).ready(function(){ 
    var myChart3 = echarts.init(document.getElementById('box3'));
	option3 = {
		title: {
			text: '上班人数',
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
		xAxis: [
			{
				type: 'category',
				boundaryGap: false,
				data: ['周一', '周二', '周三', '周四', '周五', '周六'],
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
				name: '上班人数',
				type: 'line',
				stack: '总量',
				areaStyle: {},
				data: [1220, 1332, 1401, 1434, 1430, 1210]
			}
		]
	};
	myChart3.setOption(option3);

});