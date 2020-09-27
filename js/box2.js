$(document).ready(function(){ 
    var myChart2 = echarts.init(document.getElementById('box2'));
	var data = genData(7);

	// option
	option2 = {
		title: {
			text: '在制数',
			left: 'left',
			textStyle: {
				color: '#1bb4f9'
			}
		},
		series: [
			{
				name: '姓名',
				type: 'pie',
				radius: '55%',
				center: ['40%', '50%'],
				data: [{
					name: '大烫',
					value: Math.round(Math.random() * 100000)
				},{
					name: '手工',
					value: Math.round(Math.random() * 100000)
				},{
					name: '车缝',
					value: Math.round(Math.random() * 100000)
				},{
					name: '裁剪',
					value: Math.round(Math.random() * 100000)
				},{
					name: '质检',
					value: Math.round(Math.random() * 100000)
				},{
					name: '包装',
					value: Math.round(Math.random() * 100000)
				}],
				emphasis: {
					itemStyle: {
						shadowBlur: 10,
						shadowOffsetX: 0,
						shadowColor: 'rgba(0, 0, 0, 0.5)'
					}
				}
			}
		]
	};
	function genData(count) {
		var nameList = [
			'赵',  '皮', '卞', '齐', '康', '伍', '余', '元', '卜', '顾', '孟', '平', '黄', '和', '穆', '萧', '尹', '姚', '邵', '湛', '汪', '祁', '毛', '禹', '狄', '米', '贝', '明', '臧', '计', '伏', '成', '戴', '谈', '宋', '茅', '庞', '熊', '纪', '舒', '屈', '项', '祝', '董', '梁', '杜', '阮', '蓝', '闵', '席', '季', '麻', '强', '贾', '路', '娄', '危'
		];
		var legendData = [];
		var seriesData = [];
		var selected = {};
		for (var i = 0; i < count; i++) {
			name = Math.random() > 0.65
				? makeWord(4, 1) + '·' + makeWord(3, 0)
				: makeWord(2, 1);
			legendData.push(name);
			seriesData.push({
				name: name,
				value: Math.round(Math.random() * 100000)
			});
			selected[name] = i < 6;
		}
	
		return {
			legendData: legendData,
			seriesData: seriesData,
			selected: selected
		};
	
		function makeWord(max, min) {
			var nameLen = Math.ceil(Math.random() * max + min);
			var name = [];
			for (var i = 0; i < nameLen; i++) {
				name.push(nameList[Math.round(Math.random() * nameList.length - 1)]);
			}
			return name.join('');
		}
	}

	myChart2.setOption(option2);

});