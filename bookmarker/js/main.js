document.getElementById('myForm').addEventListener('submit', saveBookmark);

function saveBookmark(e) {
    var siteName = document.getElementById('siteName').value;
    var siteUrl = document.getElementById('siteUrl').value;
    if (!siteName || !siteUrl) {
        alert('please fill in the form');
        return false;
    }

    var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);

    if (!siteUrl.match(regex)) {
        alert('please enter a valid url');
        return false;
    }
    var bookmark = {
        name:  siteName,
        url: siteUrl
    }

    if (localStorage.getItem('bookmarks') === null){
        var bookmarks = [];
        bookmarks.push(bookmark);

        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

    }else{
        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        bookmarks.push(bookmark)
        localStorage.setItem('bookmarks' , JSON.stringify(bookmarks));
    }
    fetchBookmarks();
    e.preventDefault();
}
function deleteBookmark(url) {
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    for (let i = 0; i < bookmarks.length; i++) {
        if (bookmarks[i].url === url ) {
            bookmarks.splice(i,1);
        }

    }
    fetchBookmarks();
}
function fetchBookmarks(){
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    var bookmarksResult = document.getElementById('bookmarksResult');
    bookmarksResult.innerHTML = '';
    for (let i = 0; i < bookmarks.length; i++) {
        var name = bookmarks[i].name;
        var url = bookmarks[i].url;
        bookmarksResult.innerHTML+= '<div class="container">' +
                                    '<div class="jumbotron links">'  +
                                    '<h3>' + name +
                                    ' <a class ="btn btn-info" target="_blank"  href="'+url+'" > Visit </a>'+
                                    ' <a onclick ="deleteBookmark(\''+url+'\')"  class ="btn btn-danger"> Delete </a>'+
                                    '</h3>' +
                                    '</div>'
                                    '</div>'

    }
}
