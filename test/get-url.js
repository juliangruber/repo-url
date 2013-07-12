var repoUrl = require('..');
var test = require('tape');

test('get repo url', function (t) {
  t.plan(3);
  repoUrl('repo-url', function (err, url) {
    t.error(err);
    t.equal(url, 'git://github.com/juliangruber/repo-url.git');
  });
});
