$(document).ready(function () {

    function cari() {
        // untuk mengkosongkan html ketika user ingin mencari movie lagi
        $('#list').html('')

        $.ajax({
            url: 'http://www.omdbapi.com/',
            type: 'get',
            dataType: 'json',
            data: {
                'apikey': '49cd9371',
                's': $('#input-cari').val()
            },
            success: function (res) {
                if (res.Response == 'True') {
                    let movies = res.Search;

                    $.each(movies, function (i, data) {
                        $('#list').append('<img src="' + data.Poster + '" width="80"> <h1>' + data.Title + '</h1>');
                    });

                    $('#input-cari').val('');
                } else {
                    $('#list').html('<h1>' + res.Error + '</h1>');
                }
            }
        });
    }
    $('#button-cari').on('click', function () {
        cari();
    });

    $("#input-cari").on('keyup', function (e) {
        if (e.keyCode === 13) {
            cari();
        }
    });
});