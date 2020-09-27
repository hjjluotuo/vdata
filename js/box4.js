$(document).ready(function(){ 
    // 参数1 tableID,
    //参数2 div高度，
    //参数3 速度，
    //参数4 tbody中tr几条以上滚动
    tableScroll('tableId', 400, 30, 10)
    var MyMarhq;

    function tableScroll(tableid, hei, speed, len) {
        clearTimeout(MyMarhq);
        $('#' + tableid).parent().find('.tableid_').remove()
        $('#' + tableid).parent().prepend(
            '<table class="tableid_"><thead>' + $('#' + tableid + ' thead').html() + '</thead></table>'
        ).css({
            'position': 'relative',
            'overflow': 'hidden',
            'height': hei + 'px'
        })
        $(".tableid_").find('th').each(function(i) {
            $(this).css('width', $('#' + tableid).find('th:eq(' + i + ')').width());
        });
        $(".tableid_").css({
            'position': 'absolute',
            'top': 0,
            'left': 0,
            'z-index': 9
        })
        $('#' + tableid).css({
            'position': 'absolute',
            'top': 0,
            'left': 0,
            'z-index': 1
        })

        if ($('#' + tableid).find('tbody tr').length > len) {
            $('#' + tableid).find('tbody').html($('#' + tableid).find('tbody').html() + $('#' + tableid).find('tbody').html());
            $(".tableid_").css('top', 0);
            $('#' + tableid).css('top', 0);
            var tblTop = 0;
            var outerHeight = $('#' + tableid).find('tbody').find("tr").outerHeight();

            function Marqueehq() {
                if (tblTop <= -outerHeight * $('#' + tableid).find('tbody').find("tr").length) {
                    tblTop = 0;
                } else {
                    tblTop -= 1;
                }
                $('#' + tableid).css('margin-top', tblTop + 'px');
                clearTimeout(MyMarhq);
                MyMarhq = setTimeout(function() {
                    Marqueehq()
                }, speed);
            }

            MyMarhq = setTimeout(Marqueehq, speed);
            $('#' + tableid).find('tbody').hover(function() {
                clearTimeout(MyMarhq);
            }, function() {
                clearTimeout(MyMarhq);
                if ($('#' + tableid).find('tbody tr').length > len) {
                    MyMarhq = setTimeout(Marqueehq, speed);
                }
            })
        }

    }
});