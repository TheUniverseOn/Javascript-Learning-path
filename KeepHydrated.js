Nathan loves cycling.

Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

For example:

time = 3 ----> litres = 1

time = 6.7---> litres = 3

time = 11.8--> litres = 5



//answer

const litres=(time) => Math.floor(time/2)
console.log(litres(10))

Test.describe('Fixed tests', _ => {
  Test.it('Tests', _ => {
    Test.assertEquals(litres(2), 1, 'should return 1 litre');
    Test.assertEquals(litres(1.4), 0, 'should return 0 litres');
    Test.assertEquals(litres(12.3), 6, 'should return 6 litres');
    Test.assertEquals(litres(0.82), 0, 'should return 0 litres');
    Test.assertEquals(litres(11.8), 5, 'should return 5 litres');
    Test.assertEquals(litres(1787), 893, 'should return 893 litres');
    Test.assertEquals(litres(0), 0, 'should return 0 litres');
  });
});
