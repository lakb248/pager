/**
 * justify if the object has change
 * @param  {Object} before the objcet before change
 * @param  {Object} after  the object after change
 * @return {Boolean} if the object has changed
 */
let hasObjectChange = (before, after) => {
    if ((before === undefined && before) || (before && after === undefined)) {
        return true;
    }
    var keys = Object.keys(after);
    for (let i = 0, l = keys.length; i < l; i++) {
        var key = keys[i];
        if (typeof after[key] === 'object') {
            return hasObjectChange(before[key], after[key]);
        } else if (after[key] !== before[key]) {
            return true;
        }
    }
};

const styles = [
    'width',
    'height',
    'top',
    'right',
    'bottom',
    'left'
];

let getStyleFromComponent = (component, type) => {
    let resultStyle = {};
    let componentStyle = component.style;
    if (componentStyle) {
        Object.keys(componentStyle).forEach(key => {
            if (styles.indexOf(key) !== -1) {
                resultStyle[key] = componentStyle[key] + 'px';
            } else if (!type || type === 'component') {
                resultStyle[key] = componentStyle[key];
            }
        });
    }
    return resultStyle;
};

let createComonent = type => {
    var component = {};
    var style = {};
    style.width = 100;
    style.height = 100;
    style.left = 120;
    style.top = 150;
    style.backgroundColor = '#000000';
    component.style = style;
    return component;
};

module.exports = {
    hasObjectChange,
    getStyleFromComponent,
    createComonent
};
