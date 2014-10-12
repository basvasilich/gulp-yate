gulp-yate
=========

Compile yate templates with gulp

## Usage

```javascript
var yate = require('gulp-yate');

gulp.task('yate', function() {
  gulp.src('./pages/*.yate')
    .pipe(yate());
});
```
## Or write dir name/path

```javascript
var yate = require('gulp-yate');

gulp.task('yate', function() {
  gulp.src('./pages/*.yate')
    .pipe(yate('views/'));
});
```
