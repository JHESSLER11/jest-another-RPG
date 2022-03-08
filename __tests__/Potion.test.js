const { TestWatcher } = require('jest');
const Potion = require('../lib/Potion.js');

test('creates a heath potion object', () => {
    const potion = new Potion('health');

    expect(potion.name).toBe('health')
    expect(potion.value).toEqual(expect.any(number));
})