var gulp  = require('gulp');
var shell = require('gulp-shell');

var deploygh = function() {
  "use strict";
  let gh = require('gh-pages');

  //process.env.CMDDESC="Deploy GitBook on Github";

  let json = require('./package.json');
  let REPO = json.repository.url;
  console.log( "Repositorio:"+REPO);

  gh.publish('./gh-pages', { repo: REPO, logger: function(m) { console.error(m); } });
}

//  "deploy-gitbook": "./scripts/losh deploy-gitbook",
gulp.task('deploy', [ 'build', 'push'], deploygh);

gulp.task('empujar', ['build'], 
 shell.task(
    "git commit -am 'deploy to github'"+
    ";"+
    "git push origin master",
    { verbose: true }
  )
);


//  "deploy-togbsio": "./scripts/losh deploy-togbsio",
gulp.task('push',
  shell.task(
    "git commit -am 'deploy to github'"+
    ";"+
    "git push origin master",
    { verbose: true }
  )
);

// npm install -g http-server
//  "generate-gitbook": "./scripts/generate-gitbook",
gulp.task('build', function() {
  return gulp.src('').pipe(shell(['./scripts/generate-gitbook']));
});
