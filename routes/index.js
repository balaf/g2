
/*
 * GET home page.
 */

exports.index = function(req, res){
  var data = req.gallery;

  res.render('home', data.album);
};

exports.work = function (req, res) {
    var data = req.gallery;

    console.log(JSON.stringify(data))
    res.render('all', data.album);
}


exports.gallery = function(req, res){
    var data = req.gallery;
    res.render('work', {album: data.album,
                        path: data.album.path});
};