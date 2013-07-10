var repoUrl = require('..');
var test = require('tape');

test('get repo url', function (t) {
  t.plan(3);
  repoUrl('browserify', function (err, url) {
    t.error(err);
    t.ok(url);
    t.assert(typeof url == 'string');
  });
});
