const assert = require('assert');
const AnimationLibrary = require('../src/animation');

describe('Animation Library', function() {
  describe('fadeIn()', function() {
    it('should fade in the element', async function() {
      const element = document.createElement('div');
      document.body.appendChild(element);

      await AnimationLibrary.fadeIn(element, 1000);

      assert.strictEqual(element.style.opacity, '1');
    });
  });

  describe('fadeOut()', function() {
    it('should fade out the element', async function() {
      const element = document.createElement('div');
      document.body.appendChild(element);

      await AnimationLibrary.fadeOut(element, 1000);

      assert.strictEqual(element.style.opacity, '0');
    });
  });
});
