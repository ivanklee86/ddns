import {Command, flags} from '@oclif/command'
import {v4, v6} from 'public-ip'
import cli from 'cli-ux'

export default class Update extends Command {
  static description = 'Updates DNS records with your public IP.'

  static examples = [
    '$ ddns update',
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    name: flags.string({char: 'n', description: 'name to print'}),
    force: flags.boolean({char: 'f'}),
  }

  static args = [{name: 'file'}]

  async run() {
    const {args, flags} = this.parse(Update)
    this.log(`Args: ${args}`)
    this.log(`Flags: ${flags}`)

    cli.action.start('Getting your IPv4 public address\n', 'checking', {stdout: true})
    let ipV4Address = ''

    try {
      ipV4Address = await v4({timeout: 1000})
    } catch (error) {
      this.log('Error finding IPv4 address.')
      this.log(error)
    }

    cli.action.stop(`Your IPv4 address is ${ipV4Address}\n`)

    cli.action.start('Getting your IPv6 public address\n', 'checking', {stdout: true})
    let ipV6Address = ''

    try {
      ipV6Address = await v6({timeout: 1000})
    } catch (error) {
      this.log('Error finding IPv6 address.')
      this.log(error)
    }

    cli.action.stop(`Your IPv6 address is ${ipV6Address}\n`)
  }
}
