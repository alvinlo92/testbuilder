/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';
 
describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out. 
  // You will not be able to proceed with a failing test. 

  // it('Throws an error so it fails', function() {
  //   throw new Error('Delete me!');
  // });

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num/2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num%2 === 0;
    }

    if(even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
});
describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {
    // throw new Error('Delete me!');
 
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
 
  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }
 
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  var assert = chai.assert;

  var prefix = 4;
  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork(prefix + '123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork(prefix + '123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork(prefix + '123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  var expect = chai.expect;
 
  it('has a prefix of 51 and a length of 16', function() {
    expect(detectNetwork('5112345678901234')).to.equal('MasterCard');
  });
 
  it('it has a prefix of 52 and a length of 16', function() {
    expect(detectNetwork('5212345678901234')).to.equal('MasterCard');
  });
 
  it('it has a prefix of 53 and a length of 16', function() {
    expect(detectNetwork('5312345678901234')).to.equal('MasterCard');
  });
 

  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out 
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten 
  // these tests to pass using should syntax, refactor your tests to 
  // use either expect or should, but not both. 
  var expect = chai.expect;
  
  it('has a prefix of 54 and a length of 16', function() {
    expect(detectNetwork('5412345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    expect(detectNetwork('5512345678901234')).to.equal('MasterCard');
  })
 
});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  var expect = chai.expect;

  it('has a prefix of 6011 and a length of 16', function() {
    expect(detectNetwork('6011234567890123')).to.equal('Discover');
  });

  it('has a prefix of 6011 and a length of 19', function() {
    expect(detectNetwork('6011234567890123456')).to.equal('Discover');
  });

  it('has a prefix has 644 and a length of 16', function() {
    expect(detectNetwork('6441234567890123')).to.equal('Discover');
  });

  it('has a prefix has 644 and a length of 19', function() {
    expect(detectNetwork('6441234567890123456')).to.equal('Discover');
  });

  it('has a prefix has 645 and a length of 16', function() {
    expect(detectNetwork('6451234567890123')).to.equal('Discover');
  });

  it('has a prefix has 645 and a length of 19', function() {
    expect(detectNetwork('6451234567890123456')).to.equal('Discover');
  });

  it('has a prefix has 646 and a length of 16', function() {
    expect(detectNetwork('6461234567890123')).to.equal('Discover');
  });

  it('has a prefix has 646 and a length of 19', function() {
    expect(detectNetwork('6461234567890123456')).to.equal('Discover');
  });

  it('has a prefix has 647 and a length of 16', function() {
    expect(detectNetwork('6471234567890123')).to.equal('Discover');
  });

  it('has a prefix has 647 and a length of 19', function() {
    expect(detectNetwork('6471234567890123456')).to.equal('Discover');
  });

  it('has a prefix has 648 and a length of 16', function() {
    expect(detectNetwork('6481234567890123')).to.equal('Discover');
  });

  it('has a prefix has 648 and a length of 19', function() {
    expect(detectNetwork('6481234567890123456')).to.equal('Discover');
  });

  it('has a prefix has 649 and a length of 16', function() {
    expect(detectNetwork('6491234567890123')).to.equal('Discover');
  });

  it('has a prefix has 649 and a length of 19', function() {
    expect(detectNetwork('6491234567890123456')).to.equal('Discover');
  });

  it('has a prefix has 65 and a length of 16', function() {
    expect(detectNetwork('6541234567890123')).to.equal('Discover');
  });

  it('has a prefix has 65 and a length of 19', function() {
    expect(detectNetwork('6541234567890123456')).to.equal('Discover');
  });
});

describe('Maestro', function() {
  // Write full test coverage for the Maestro card
  var expect = chai.expect;
  
  // test 5018
  it('has a prefix of 5018 and a length of 12', function() {
    expect(detectNetwork('501834567890')).to.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 13', function() {
    expect(detectNetwork('5018345678901')).to.equal('Maestro');
  })
  it('has a prefix of 5018 and a length of 14', function() {
    expect(detectNetwork('50183456789012')).to.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 15', function() {
    expect(detectNetwork('501834567890123')).to.equal('Maestro');
  })
  it('has a prefix of 5018 and a length of 16', function() {
    expect(detectNetwork('5018345678901234')).to.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 17', function() {
    expect(detectNetwork('50183456789012345')).to.equal('Maestro');
  })
  it('has a prefix of 5018 and a length of 18', function() {
    expect(detectNetwork('501834567890123456')).to.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 19', function() {
    expect(detectNetwork('5018345678901234567')).to.equal('Maestro');
  })
  // test 5020
  it('has a prefix of 5018 and a length of 12', function() {
    expect(detectNetwork('502034567890')).to.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 13', function() {
    expect(detectNetwork('5020345678901')).to.equal('Maestro');
  })
  it('has a prefix of 5018 and a length of 14', function() {
    expect(detectNetwork('50203456789012')).to.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 15', function() {
    expect(detectNetwork('502034567890123')).to.equal('Maestro');
  })
  it('has a prefix of 5018 and a length of 16', function() {
    expect(detectNetwork('5020345678901234')).to.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 17', function() {
    expect(detectNetwork('50203456789012345')).to.equal('Maestro');
  })
  it('has a prefix of 5018 and a length of 18', function() {
    expect(detectNetwork('502034567890123456')).to.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 19', function() {
    expect(detectNetwork('5020345678901234567')).to.equal('Maestro');
  })
  // test 5038
  it('has a prefix of 5018 and a length of 12', function() {
    expect(detectNetwork('503834567890')).to.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 13', function() {
    expect(detectNetwork('5038345678901')).to.equal('Maestro');
  })
  it('has a prefix of 5018 and a length of 14', function() {
    expect(detectNetwork('50383456789012')).to.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 15', function() {
    expect(detectNetwork('503834567890123')).to.equal('Maestro');
  })
  it('has a prefix of 5018 and a length of 16', function() {
    expect(detectNetwork('5038345678901234')).to.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 17', function() {
    expect(detectNetwork('50383456789012345')).to.equal('Maestro');
  })
  it('has a prefix of 5018 and a length of 18', function() {
    expect(detectNetwork('503834567890123456')).to.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 19', function() {
    expect(detectNetwork('5038345678901234567')).to.equal('Maestro');
  })
  // test 6304
  it('has a prefix of 5018 and a length of 12', function() {
    expect(detectNetwork('630434567890')).to.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 13', function() {
    expect(detectNetwork('6304345678901')).to.equal('Maestro');
  })
  it('has a prefix of 5018 and a length of 14', function() {
    expect(detectNetwork('63043456789012')).to.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 15', function() {
    expect(detectNetwork('630434567890123')).to.equal('Maestro');
  })
  it('has a prefix of 5018 and a length of 16', function() {
    expect(detectNetwork('6304345678901234')).to.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 17', function() {
    expect(detectNetwork('63043456789012345')).to.equal('Maestro');
  })
  it('has a prefix of 5018 and a length of 18', function() {
    expect(detectNetwork('630434567890123456')).to.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 19', function() {
    expect(detectNetwork('6304345678901234567')).to.equal('Maestro');
  })
});

describe('China UnionPay', function() {
  // should support China UnionPay
  // prefix of 622126-622925, 624-626, or 6282-6288 and length of 16-19
  var expect = chai.expect;

  for (var prefix = 622126; prefix <= 622925; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function() {
        expect(detectNetwork(prefix + '1234567890')).to.equal('China UnionPay');
      });

      it('has a prefix of ' + prefix + ' and a length of 17', function() {
        expect(detectNetwork(prefix + '12345678901')).to.equal('China UnionPay');
      });

      it('has a prefix of ' + prefix + ' and a length of 18', function() {
        expect(detectNetwork(prefix + '123456789012')).to.equal('China UnionPay');
      });

      it('has a prefix of ' + prefix + ' and a length of 19', function() {
        expect(detectNetwork(prefix + '1234567890123')).to.equal('China UnionPay');
      });
    })(prefix);
  }

  for (var prefix = 624; prefix <= 626; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function() {
        expect(detectNetwork(prefix + '1234567890123')).to.equal('China UnionPay');
      });

      it('has a prefix of ' + prefix + ' and a length of 17', function() {
        expect(detectNetwork(prefix + '12345678901234')).to.equal('China UnionPay');
      });

      it('has a prefix of ' + prefix + ' and a length of 18', function() {
        expect(detectNetwork(prefix + '123456789012345')).to.equal('China UnionPay');
      });

      it('has a prefix of ' + prefix + ' and a length of 19', function() {
        expect(detectNetwork(prefix + '1234567890123456')).to.equal('China UnionPay');
      });
    })(prefix);
  }

  for (var prefix = 6282; prefix <= 6288; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function() {
        expect(detectNetwork(prefix + '123456789012')).to.equal('China UnionPay');
      });

      it('has a prefix of ' + prefix + ' and a length of 17', function() {
        expect(detectNetwork(prefix + '1234567890123')).to.equal('China UnionPay');
      });

      it('has a prefix of ' + prefix + ' and a length of 18', function() {
        expect(detectNetwork(prefix + '12345678901234')).to.equal('China UnionPay');
      });

      it('has a prefix of ' + prefix + ' and a length of 19', function() {
        expect(detectNetwork(prefix + '123456789012345')).to.equal('China UnionPay');
      });
    })(prefix);
  }
});

describe('Switch', function() {
  // should support Switch
  // has prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759, and a length of 16, 18, or 19
  //Visa and Switch have overlapping card numbers. Choose the network with the longer prefix
  var expect = chai.expect;

  var fours = [4903, 4905, 4911, 4936, 6333, 6759];
  var six = [564182, 633110];

  for (var i = 0; i < fours.length; i++) {
    var prefix = fours[i];
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function() {
        expect(detectNetwork(prefix + '123456789012')).to.equal('Switch');
      });

      it('has a prefix of ' + prefix + ' and a length of 18', function() {
        expect(detectNetwork(prefix + '12345678901234')).to.equal('Switch');
      });

      it('has a prefix of ' + prefix + ' and a length of 19', function() {
        expect(detectNetwork(prefix + '123456789012345')).to.equal('Switch');
      });
    })(prefix);
  }

  for (var i = 0; i < six.length; i++) {
    var prefix = six[i];
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function() {
        expect(detectNetwork(prefix + '1234567890')).to.equal('Switch');
      });

      it('has a prefix of ' + prefix + ' and a length of 18', function() {
        expect(detectNetwork(prefix + '123456789012')).to.equal('Switch');
      });

      it('has a prefix of ' + prefix + ' and a length of 19', function() {
        expect(detectNetwork(prefix + '1234567890123')).to.equal('Switch');
      });
    })(prefix);
  }  
});