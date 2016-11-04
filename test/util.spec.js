import Util from '../src/util/util.js';

describe('util.js:getStyleFromComponent', () => {
    it('should append px after width/height/top/right/bottom/left', () => {
        var component = {
            style: {
                width: 100
            }
        };
        var style = Util.getStyleFromComponent(component);
        expect(style.width).toBe('100px');
    });
    it('should not include styles except width/height/top/right/bottom/left\
        if type is controller', () => {
            var component = {
                style: {
                    width: 100,
                    backgroundColor: '#000'
                }
            };
            var style = Util.getStyleFromComponent(component, 'controller');
            expect(style.backgroundColor).toBe(undefined);
        });
    it('should include all styles if type is undefined or component', () => {
        var component = {
            style: {
                width: 100,
                backgroundColor: '#000'
            }
        };
        var style = Util.getStyleFromComponent(component, 'component');
        expect(style.backgroundColor).toBe('#000');
    });
    it('should return empty object if the component does not have style', () => {
        var component = {};
        var style = Util.getStyleFromComponent(component);
        expect(style).toEqual({});
    });
});

describe('util.js:hasObjectChange', () => {
    it('should return true if one of the arguments is undefined', () => {
        var hasObjectChange = Util.hasObjectChange(undefined, {});
        expect(hasObjectChange).toBe(true);
    });
    it('should return false if pass the same object', () => {
        var obj = {a: 1};
        var hasObjectChange = Util.hasObjectChange(obj, obj);
        expect(hasObjectChange).toBe(false);
    });
    it('should return false if pass different objects, but have the same value', () => {
        var hasObjectChange = Util.hasObjectChange({a: 1}, {a: 1});
        expect(hasObjectChange).toBe(false);
    });
    it('should return true if pass different objects and have different value', () => {
        var hasObjectChange = Util.hasObjectChange({a: 1}, {a: 2});
        expect(hasObjectChange).toBe(true);
    });
    it('should recur compare the argument if the arguments have object inside', () => {
        var hasObjectChange = Util.hasObjectChange({a: {b: 3}}, {a: {b: 3}});
        expect(hasObjectChange).toBe(false);
    });
});
describe('util.js:createComonent',() => {
    it('should return a new componet', () => {
        var component = {
            style: {
                width: 100,
                height: 100,
                left: 120,
                top: 150,
                backgroundColor: '#000000'
            }
        };
        var hasChange = Util.hasObjectChange(component, Util.createComonent());
        expect(hasChange).toBe(false);
    });
});
