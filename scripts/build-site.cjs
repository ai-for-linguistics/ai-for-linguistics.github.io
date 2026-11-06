const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const output = path.join(root, 'dist');
fs.rmSync(output, {recursive: true, force: true});
fs.mkdirSync(output, {recursive: true});
for (const page of ['index.html', 'mission.html']) {
  fs.copyFileSync(path.join(root, page), path.join(output, page));
}
fs.cpSync(path.join(root, 'assets'), path.join(output, 'assets'), {recursive: true});
fs.writeFileSync(path.join(output, '.nojekyll'), '');
console.log('Built dist/');
