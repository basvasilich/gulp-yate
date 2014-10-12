var map = require('map-stream');
var exec = require("child_process").exec;
var path = require("path");

var build = function(dir) {
    var _dir = dir || null;
    if (_dir && !/\/$/.test(_dir)) {
        _dir += '/';
    }
    var fn = function(file, cb) {
        file.name = path.basename(file.relative, path.extname(file.relative));
        var cmd = ['./node_modules/yate/yate ', file.path, '>', (_dir ? _dir : file.base), file.name, '.js', '&& rm ', file.path, '.obj'].join('');

        exec(cmd, function(err, stdout, stderr) {
            if (err) {
                cb(new Error(err), undefined);
                return;
            }

            cb(null, file);
        });
    };

    return map(fn);
};

module.exports = build;
