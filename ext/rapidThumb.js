var im = require('imagemagick'),
    fs = require('fs'),
    util = require('util'),
    path = require('path')



var rt = {
    imageCache : {},
    init : function (base) {

        var me = this;
        var root = path.normalize(base);

        return function(req, res, next){

            var file = req.url.replace(/\?.*/,''),
                dim = req.query.tn || "",
                orig = path.normalize(root + file)

            if (!dim) {
                // not a thumbnail, let it go
                return next();
            }

            /// else move on

            var dims = dim.split(/x/g)

            if (me.imageCache[orig]){
                res.contentType('image/jpg');
                res.end(me.imageCache[orig], 'binary');
            } else {
                fs.readFile(orig, 'binary', function(err, file){
                    if (err){
                        console.log(err);
                        return res.send(err);
                    }
                    opts = {
                        srcData : file,
                        width : dims[0]
                    };
                    im.resize(opts, function(err, binary, stderr){
                        if (err){
                            util.inspect(err);
                            res.send('error generating thumb');
                        } else {
                            res.contentType('image/jpg');
                            res.end(binary, 'binary');
                            me.imageCache[orig] = binary;
                        }
                    });
                });
            }
        };
    }
}

module.exports = rt;