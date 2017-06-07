var expect = require('expect');

it('should properly run tests', () => {
  expect(1).toBe(1);
});

describe('App', () =>{
  it("shouldn't Properly run tests", () => {
    expect(1).toBe(2);
  });
});
