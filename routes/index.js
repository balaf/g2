
/*
 * GET home page.
 */

exports.index = function(req, res){
  var data = req.gallery;

  console.log('Albums: ', data.album.albums.length);
  res.render('home', data.album);
};