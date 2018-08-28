const req = require("request-promise");
const assert = require("assert");

const port = process.env.PORT || 80;

console.log("Running unit tests...");

req(`http://localhost:${port}/`, {
  resolveWithFullResponse: true,
  simple: false
})
  .then(res => {
    assert.equal(res.statusCode, 200);
    console.log("PASS!");
  })
  .catch(() => {
    console.log("FAIL!");
    process.exit(1);
  });
