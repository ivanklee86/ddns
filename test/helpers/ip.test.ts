import getIp from '../../src/helpers/ip'
import {expect} from 'chai'
import 'mocha'

describe('getIp', () => {
  it('should return hello world', async () => {
    const result = await getIp()
    console.log(result)
  })
})
