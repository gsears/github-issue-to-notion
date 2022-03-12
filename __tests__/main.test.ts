import * as cp from 'child_process'
import * as path from 'path'
import * as process from 'process'
import {test} from '@jest/globals'

// shows how the runner will run a javascript action with env / stdout protocol
test('test runs', () => {
  process.env['INPUT_NAME'] = 'World'
  const np = process.execPath
  const ip = path.join(__dirname, '..', 'lib', 'main.js')
  const options: cp.ExecFileSyncOptions = {
    env: process.env
  }
  // eslint-disable-next-line no-console
  console.log(cp.execFileSync(np, [ip], options).toString())
})
