const replaceSuffixPattern = /--(active|big|small|very-big)/g;
const defaultIconProvider = ION;
global.iconsMap = {};

module.exports = (icons) => {
    return new Promise((resolve, reject) => { //cache all icons as images
        new Promise.all(
            Object.keys(icons).map(iconName => {
                const Provider = icons[iconName][2] || defaultIconProvider; // Ionicons
                return Provider.getImageSource(
                    iconName.replace(replaceSuffixPattern, ''),
                    icons[iconName][0],
                    icons[iconName][1]
                )
            })
        ).then(sources => {
            Object.keys(icons)
                .forEach((iconName, idx) => iconsMap[iconName] = sources[idx])

            // Call resolve (and we are done)
            resolve(true);
        })
    });
};