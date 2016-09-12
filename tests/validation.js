import test from 'ava';
import validation from '../lib/validation';

const input = {
  target: {
    name: 'time',
    value: 'foo bar baz',
  },
  all: {
    time: 'foo bar baz',
  },
};

const settings = {
  target: {
    empty: false,
  },
  all: {
    time: {
      empty: false,
    },
  },
};


// Valid input
test('valid input', t => {
  t.true(validation(input, settings), 'Valid input returns true');
});
