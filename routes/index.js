
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
    res.render('work', {album: data.album,
                        path: data.album.path});
};