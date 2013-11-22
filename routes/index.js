
/*
 * GET home page.
 */

exports.index = function(req, res){
  var data = req.gallery;


  res.render('home', { title: "Ζωγραφική Τοίχου - Παιδικό Δωμάτιο - Δέσποινα Τσίγκα Μπούσια", "gallery" : data.album});
};

exports.work = function (req, res) {
    var data = req.gallery;
    console.log(JSON.stringify(data))
    res.render('all', { title:"Έργα- Δέσποινα Τσίγκα Μπούσια" , gallery: data.album });
}


exports.gallery = function(req, res){
    var data = req.gallery;
    res.render('work', {title: "hello",
                        album: data.album,
                        path: data.album.path});
};