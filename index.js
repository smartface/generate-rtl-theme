const fs = require('fs');
const minimist = require('minimist');

const argv = minimist(process.argv.slice(2));

const themeDirectoryPath = argv['path'] || './theme/';
const willGenerateThemes = argv['themeName'] ? [argv['themeName']] : [];
const arabicFontFamily = argv['font'] || '';
const replaceFontStyle = argv['replaceFontStyle'] || '';
const isStartedWatcher = argv['w'];

let themeObject = {};
const classesWithLayout = [
    '.page',
    '.scrollView',
    '.shimmerFlexLayout',
    '.dialog'
];

if (!fs.existsSync(themeDirectoryPath)) {
    console.error(`${themeDirectoryPath} directory is not exist!`);
    return;
}

if (willGenerateThemes.length === 0) {
    fs.readdirSync(themeDirectoryPath).forEach(fileName => {
        if (fileName.slice(-4).toLowerCase() === 'json' && fileName.slice(-7).toLowerCase() !== 'ar.json') {
            willGenerateThemes.push(fileName);
        }
    });
}

if (willGenerateThemes.length === 0) {
    console.error(`No themes found in ${themeDirectoryPath} directory!`);
    return;
}

console.info(`Found ${willGenerateThemes.length} themes. \n\nGeneration process was started, fasten your seat belts please!\n\n`);

function generateThemes() {
    try {
        willGenerateThemes.forEach(themeName => {
            const themePath = themeDirectoryPath + themeName;
            const arabicThemePath = themeDirectoryPath + themeName.replace('.json', 'AR.json');

            isStartedWatcher && initWatcher(themePath, arabicThemePath);
            start(themePath, arabicThemePath);
        });
    } catch (err) {
        console.error(err);
        return;
    }
}

generateThemes();

function start(themePath, arabicThemePath) {
    console.info(`Reading ${themePath}`);
    const themeJSON = fs.readFileSync(themePath, 'utf8');
    try {
        themeObject = JSON.parse(themeJSON);
    }
    catch (e) {
        throw new Error(`An error has occurred when ${themePath} converting to JSON.`, e)
    }
    console.info('Changing to arabic');
    themeObject = changeToArabic(themeObject);
    console.info(`Writing changes to ${arabicThemePath}`);

    try {
        fs.writeFileSync(arabicThemePath, JSON.stringify(themeObject, null, '\t'), 'utf8');
    }
    catch (e) {
        throw new Error(`An error has occurred when creating ${arabicThemePath}.`, e)
    }
    console.info('Success\n\n');
}

function initWatcher(themePath, arabicThemePath) {
    try {
        var chokidar = require('chokidar');
    }
    catch (e) {
        throw new Error('You need to run "npm install chokidar in the root directory first"');
    }
    // Initialize watcher.
    const watcher = chokidar.watch(themePath, {
        ignored: /(^|[\/\\])\../,
        persistent: true
    });
    watcher.on('change', path => {
        console.info('.\n.\n.\nDetected changes, Restarting...');
        setTimeout(generateThemes, 1500);
    });
    console.info(`Waiting for changes in ${arabicThemePath}`);
}

function changeToArabic(object, parentClass, path = '') {
    let objectModified = false;

    if (objectModified) return;

    let keys = Object.keys(object);
    keys.filter(key => object[key] && object[key].constructor === Object && ['.', '#', '&', '+'].includes(key[0]))
        .forEach(childObjectClass => {
            const childPath = path + (childObjectClass.startsWith('&') ?
                childObjectClass.substr(1) : childObjectClass);
            object[childObjectClass] = changeToArabic(object[childObjectClass], childObjectClass, childPath);
        });

    setRTL(object, parentClass);

    object.x && (object.x = -object.x);
    object.textAlignment = getTextViewAlignment(object.textAlignment, parentClass);

    if (arabicFontFamily) {
        object.font = changeFont(object.font);
    }

    switchPropsAll(object);

    keys = Object.keys(object);
    const sortedKeys = keys.sort((a, b) => {
        if (a.startsWith('.') && !b.startsWith('.'))
            return Infinity;
        else if (!a.startsWith('.') && b.startsWith('.'))
            return -Infinity;
        else
            return a - b;
    });
    let newObject = {};
    sortedKeys.forEach(k => newObject[k] = object[k]);
    object = newObject;

    objectModified = true;

    return object;
}

function switchPropsAll(target) {
    switchProps(target, 'paddingLeft', 'paddingRight');
    switchProps(target, 'marginLeft', 'marginRight');
    switchProps(target, 'left', 'right');
}

function setRTL(object, parentClass) {
    classesWithLayout.forEach((item) => {
        if (parentClass === item) {
            object.layout = object.layout = {};
            object.layout.flexProps = object.layout.flexProps || {};
            object.layout.flexProps.direction = 'RTL';
        }
        else {
            object.flexProps = object.flexProps || {};
            object.flexProps.direction = 'RTL';
        }
    });
}

function switchProps(object, firstProp, secondProp) {
    [object[firstProp], object[secondProp]] = [object[secondProp], object[firstProp]];
}

function changeFont(font) {
    if (!font) return;
    if (font.family) {
        font.family = arabicFontFamily;
    }
    if (font.style && replaceFontStyle) {
        font.style = font.style.replace(replaceFontStyle, '');
    }
    return font;
}

function getTextViewAlignment(alignment, parentClass) {
    //custom class with no textAlignment property
    if (!alignment) return;

    const leftRegex = /LEFT/;
    const rightRegex = /RIGHT/;

    if (alignment.match(leftRegex)) {
        return alignment.replace(leftRegex, 'RIGHT');
    }
    return alignment.replace(rightRegex, 'LEFT');
}
