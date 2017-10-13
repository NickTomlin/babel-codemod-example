const fs = require('fs')
const { resolve } = require('path')
const childProcess = require('child_process')
const { promisify } = require('util')

const codemod = resolve(require.resolve('babel-codemod'), '../../bin/codemod')
const exec = promisify(childProcess.exec)
const readFile = promisify(fs.readFile)

async function runForFixture (fixtureName) {
  // this pathing relies on the fact that `npm test` will faithfully execute from the package.json DIR
  return Promise.all([
    exec(`cat test/fixtures/${fixtureName}.js | ${codemod} --stdio -p ./index.js`),
    readFile(`test/fixtures/${fixtureName}.expected.js`, 'utf8')
  ])
}

module.exports = {
  runForFixture
}
