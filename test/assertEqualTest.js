const assertEqual = require('../assertEqual');
assertEqual("abc", "abc");
assertEqual("abc", "abcs");
assertEqual("123", "123");
assertEqual("123", "321");