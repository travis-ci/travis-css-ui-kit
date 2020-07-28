const webfont = require('webfont').default;
const fse = require('fs-extra');
const fs = require('fs');
const path = require('path');

const fontsDir = path.resolve('./dist/fonts');
const stylesDir = path.resolve('./dist/styles');
fse.ensureDirSync(fontsDir);
fse.ensureDirSync(stylesDir);
fse.emptyDirSync(fontsDir);

webfont({
  files: 'src/images/icons/**/*.svg',
  fontName: 'travis-icons',
  template: 'css',
  templateClassName: 'tc-icon',
  templateFontPath: '../fonts',
  glyphTransformFn: obj => {
    obj.name = obj.name.replace('icon-', '')
    return obj;
  }
})
.then(result => {
  fs.writeFileSync(path.join(fontsDir, 'travis-icons.ttf'), result.ttf);
  fs.writeFileSync(path.join(fontsDir, 'travis-icons.eot'), result.eot);
  fs.writeFileSync(path.join(fontsDir, 'travis-icons.woff'), result.woff);
  fs.writeFileSync(path.join(fontsDir, 'travis-icons.woff2'), result.woff2);
  fs.writeFileSync(path.join(stylesDir, 'travis-icon-font.css'), result.template);
  return result;
})
.catch(error => {
  throw error;
});
