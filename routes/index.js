
/*
 * GET home page.
 */

exports.index = function(req, res){
  var data = req.gallery;

  console.log('Albums: ', data.album.albums.length);
  res.render('home', data.album);
};


exports.gallery = function(req, res){
    var data = req.gallery;
    console.log(JSON.stringify(data));
    console.log('Albums: ', data.album.photos.length);
    res.render('work', {album: data.album,
                        path: data.album.path});
};