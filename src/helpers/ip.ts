import {v4, v6} from 'public-ip'

export default async function getIp(ipV4: boolean, ipV6): Promise<string> {
  return await v4()
}
