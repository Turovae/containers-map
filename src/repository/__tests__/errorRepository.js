import ErrorRepository from '../errorRepository';

test.each([
  [400, 'Bad Request'],
  [401, 'Unauthorized'],
  [402, 'Payment Required'],
  [403, 'Forbidden'],
  [404, 'Not Found'],
  [405, 'Unknown error'],
])(
  'Test ErrorRepository.translate with code %d',
  (code, expected) => {
    expect(ErrorRepository.translate(code)).toBe(expected);
  },
);
