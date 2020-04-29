it('Should pass - 1 + 2 equals 3', function() {
  expect(1 + 2).toEqual(3)
})

it('Should fail - 1 + 1 equals 3', function() {
  expect(1 + 1).toEqual(3)
})

it('Should fail - one of two correct ', function() {
  expect(1 + 1).toEqual(3)
  expect(1 + 2).toEqual(3)
})

it('Should pass - two of two correct ', function() {
  expect(1 + 1).toEqual(2)
  expect(2 + 2).toEqual(4)
})