$(document).ready(function(){ 
    var myChart6 = echarts.init(document.getElementById('box6'));
    option6 = {
        title: {
            text: '合格率-94.5%',
            left: 'center',
			textStyle: {
				color: '#1bb4f9'
			}
		},
        series: [
            {
                name: '工厂二号',
                type: 'gauge',
                detail: {
                    formatter: ' ',
                    fontSize: 15,
                    color: '#1bb4f9',
                },
                data: [{value: 94.5}]
            }
        ]
    };
    
    // option6.series[0].data[0].value = '98.54';
    myChart6.setOption(option6, true);
    

});