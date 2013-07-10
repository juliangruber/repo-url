var Client = require('silent-npm-registry-client');
var os = require('os');

module.exports = repoUrl;

var client = new Client({
  registry: 'http://registry.npmjs.org/',
  cache: os.tmpDir() + '/git-url'
});

function repoUrl (module, fn) {
  client.get('/' + module, function (err, pkg) {
    if (err) return fn(err);
    if (!pkg.repository) return fn(new Error('no repository field'));
    fn(null, pkg.repository.url);
  });
}
