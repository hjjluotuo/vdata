$(document).ready(function(){ 
    var myChart5 = echarts.init(document.getElementById('box5'));
    option5 = {
        title: {
            text: '生产效率-85.54%',
            left: 'center',
			textStyle: {
				color: '#1bb4f9'
			}
		},
        series: [
            {
                name: '工厂一号',
                type: 'gauge',
                detail: {
                    formatter: ' ',
                    fontSize: 15,
                    color: '#1bb4f9',
                },
                data: [{value: 85.54}]
            }
        ]
    };
    
    // option5.series[0].data[0].value = '95.55';
    myChart5.setOption(option5, true);  

});