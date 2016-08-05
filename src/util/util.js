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

let getStyleFromComponent = component => {
    let resultStyle = {};
    let componentStyle = component.style;
    Object.keys(componentStyle).forEach(key => {
        if (styles.indexOf(key) !== -1) {
            resultStyle[key] = componentStyle[key] + 'px';
        } else {
            resultStyle[key] = componentStyle[key];
        }
    });
    return resultStyle;
};

module.exports = {
    hasObjectChange,
    getStyleFromComponent
};
