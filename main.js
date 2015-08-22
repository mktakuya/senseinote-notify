$.getJSON('http://localhost:3000/api/v1/notifications/',
        {
            "Authentication": "YOUR_TOKEN"
        },
        function(data) {
            $.each(data.items, function(i, item){
                a = '<a href="http://localhost:3000">' + item.detail + '</a>';
                $('tbody').append('<tr><td>' + a + '</td></tr>');
            });
        });

/*
console.log(chrome.cookies.get({url: 'http://localhost', name: 'remember_token'},function(cookie){
    console.log(cookie);
}));
*/
