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
});
