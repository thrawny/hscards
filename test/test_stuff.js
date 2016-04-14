/**
 * Created by thrawn on 14/04/16.
 */

import expect from 'expect';
import request from 'supertest';

process.env.PORT = 8888;

describe('stuff', () => {
  it('should be true', done => {
    const server = require('../server');
    request(server)
      .get('/')
      .expect(200, done)
  });
  it('should be false', () => {
    expect(false).toBeFalsy()
  })
});


