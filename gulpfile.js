var gulp  = require('gulp');
var shell = require('gulp-shell');
var ghPages = require('gulp-gh-pages');

    


var deploygh = function() {
  "use strict";
  let gh = require('gh-pages');

  //process.env.CMDDESC="Deploy GitBook on Github";

  let json = require('./package.json');
  let REPO = json.repository.url;
  console.log( "Repositorio:"+REPO);

  gh.publish('./gh-pages', { repo: REPO, logger: function(m) { console.error(m); } });
};


//empujar a gh-pages el directorio template
gulp.task('deploy-gh-pages', function() {
      return gulp.src('./template/_book/*')
        .pipe(ghPages());
});


//  "deploy-gitbook": "./scripts/losh deploy-gitbook",
gulp.task('deploy', deploygh);

gulp.task('empujar', ['build'], 
 shell.task(
    "git add ."+
    ";"+
    "git commit -am 'deploy to github'"+
    ";"+
    "git push origin master",
    { verbose: true }
  )
);

gulp.task('pdf', 
  shell.task(
    "gitbook pdf ./txt",
    { verbose: true })
);

gulp.task('mobi', 
  shell.task(
    "gitbook mobi",
    { verbose: true })
);

gulp.task('epub', 
  shell.task(
    "gitbook epub",
    { verbose: true })
);

// npm install -g http-server
//  "generate-gitbook": "./scripts/generate-gitbook",
gulp.task('build', function() {
  return gulp.src('').pipe(shell(['./scripts/generate-gitbook']));
}); 
