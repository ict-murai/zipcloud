// 画面の表示準備が終わったら発火
$(function(){
    $('#search-btn').on('click', function(){
        let ZipCode = $('#search-word').val();


        $.ajax({
            // 通信をするブロック
            url: 'https://zipcloud.ibsnet.co.jp/api/search',
            type: 'GET',
            dataType: 'jsonp',
            data:{
                zipcode: ZipCode,                                                                                                                                                           
            }

        }).done((data) => {
            // 通信が成功した時
            // dataには通信の結果が格納される
            let prefecture = data.results[0].address1;
            let city = data.results[0].address2;
            let address = data.results[0].address3;
            
            $('#prefecture').text(prefecture);
            $('#city').text(city);
            $('#address').text(address);
            
            // console.log(data);
        }).fail((error) => {
            // 通信が失敗した時
            // errorには通信した失敗の原因が格納
        })
    })
})