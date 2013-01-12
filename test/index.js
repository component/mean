
var mean = require('..');

var tobi = { name: { first: 'tobi' }, age: 3, role: { name: 'admin' } };
var loki = { name: { first: 'loki' }, age: 1 };
var jane = { name: { first: 'jane' }, age: 8 };

describe('mean(arr, fn)', function(){
  it('should return the mean value', function(){
    var arr = [1,2,3];
    var n = mean(arr, function(n){ return n * 2 });
    n.should.eql(4);
  })

  it('should support property strings', function(){
    var users = [tobi, loki, jane];
    var n = mean(users, 'age');
    n.should.equal(4);
  })
})

describe('mean(arr)', function(){
  it('should return the mean value', function(){
    mean([1,3,2]).should.equal(2);
  })
  it('should support negative numbers', function(){
    mean([-1,-3,-2]).should.equal(-2);
  })
})
