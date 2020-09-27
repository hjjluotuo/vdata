$(document).ready(function(){ 
    var myChart11 = echarts.init(document.getElementById('box11'));
    option11 = {
        title: {
            text: '工序产出量',
            left: 'left',
			textStyle: {
				color: '#1bb4f9'
			}
        },  
        series: [
            {
                name:'漏斗图',
                type:'funnel',
                left: '10%',
                top: 60,
                //x2: 80,
                bottom: 60,
                width: '80%',
                // height: {totalHeight} - y - y2,
                min: 0,
                max: 100,
                minSize: '0%',
                maxSize: '100%',
                sort: 'descending',
                gap: 2,
                label: {
                    show: true,
                    position: 'inside'
                },
                labelLine: {
                    length: 10,
                    lineStyle: {
                        width: 1,
                        type: 'solid'
                    }
                },
                itemStyle: {
                    borderColor: '#fff',
                    borderWidth: 1
                },
                emphasis: {
                    label: {
                        fontSize: 20
                    }
                },
                data: [
                    {value: 60, name: '大烫'},
                    {value: 40, name: '手工'},
                    {value: 20, name: '车缝'},
                    {value: 80, name: '裁剪'},
                    {value: 100, name: '质检'},
                    {value: 100, name: '包装'}
                ]
            }
        ]
    };
        
    myChart11.setOption(option11);
    

});