import test from 'ava'
import { runForFixture } from './helper'

test('transforms basic require statements from let and var to const', async t => {
  const [ output, expected ] = await runForFixture('basic')

  t.is(output.stdout, expected)
});
