const webfont = require('webfont').default;
const fse = require('fs-extra');
const fs = require('fs');
const path = require('path');

const fontsDir = path.resolve('./build/fonts');
const stylesDir = path.resolve('./build/styles');
fse.ensureDirSync(fontsDir);
fse.ensureDirSync(stylesDir);
fse.emptyDirSync(fontsDir);

webfont({
  files: 'src/images/icons/**/*.svg',
  fontName: 'travis-icons',
  template: 'css',
  templateClassName: 'travis-icon',
  templateFontPath: '../fonts',
  glyphTransformFn: obj => {
    obj.name = obj.name.replace('icon-', '')
    return obj;
  }
})
.then(result => {
  fs.writeFileSync(path.join(fontsDir, 'travis-icon-font.ttf'), result.ttf);
  fs.writeFileSync(path.join(fontsDir, 'travis-icon-font.eot'), result.eot);
  fs.writeFileSync(path.join(fontsDir, 'travis-icon-font.woff'), result.woff);
  fs.writeFileSync(path.join(fontsDir, 'travis-icon-font.woff2'), result.woff2);
  fs.writeFileSync(path.join(stylesDir, 'travis-icon-font.css'), result.template);
  return result;
})
.catch(error => {
  throw error;
});
