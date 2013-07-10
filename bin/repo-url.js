#!/usr/bin/env node

var repoUrl = require('..');

repoUrl(process.argv[2], function (err, url) {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  process.stdout.write(url);
});
