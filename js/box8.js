$(document).ready(function(){ 
    var myChart8 = echarts.init(document.getElementById('box8'));
    option8 = {
        tooltip: {
            formatter: '{a} <br/>{b} : {c}%'
        },
        toolbox: {
            feature: {
                restore: {},
                saveAsImage: {}
            }
        },
        series: [
            {
                name: '业务指标',
                type: 'gauge',
                detail: {formatter: '{value}%'},
                data: [{value: 50, name: '完成率'}]
            }
        ]
    };
    
    setInterval(function () {
        option8.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
        myChart8.setOption(option8, true);
    },2000);
    

});