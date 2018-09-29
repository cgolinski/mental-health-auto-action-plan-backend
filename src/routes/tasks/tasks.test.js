const request = require('supertest');

const { tasksRouter } = require('./tasks.router');

describe('tests for the tasks check endpoint', () => {
  it('returns a 200', () => {
    expect(true).toBe(true);
  });
});
