$(document).ready(function(){ 
    var myChart7 = echarts.init(document.getElementById('box7'));
    option7 = {
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
        option7.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
        myChart7.setOption(option7, true);
    },2000);
    

});