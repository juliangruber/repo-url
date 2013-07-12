var repoUrl = require('..');
var test = require('tape');

test('ssh repo url', function (t) {
  t.plan(2);
  repoUrl.ssh('repo-url', function (err, url) {
    t.error(err);
    t.equal(url, 'git@github.com:juliangruber/repo-url.git');
  });
});

test('https repo url', function (t) {
  t.plan(2);
  repoUrl.https('repo-url', function (err, url) {
    t.error(err);
    t.equal(url, 'https://github.com/juliangruber/repo-url.git');
  });
});
