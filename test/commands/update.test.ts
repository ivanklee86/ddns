import {expect, test} from '@oclif/test'
import sinon from 'sinon'
import 'public-ip'
import publicIp from 'public-ip'

describe('update', () => {
  const v6Callback = sinon.stub(publicIp, 'v6')
  v6Callback.resolves('2606:4700:4700::64')

  const v4Callback = sinon.stub(publicIp, 'v4')
  v4Callback.resolves('1.1.1.1')

  test
  .stdout()
  .command(['update'])
  .it('runs update', ctx => {
    expect(ctx.stdout).to.contain('1.1.1.1')
    expect(ctx.stdout).to.contain('2606:4700:4700::64')
  })
})
