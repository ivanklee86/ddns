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

    cli.action.start('Getting your IPv4 public address\n', 'checking', {stdout: true})
    const ipV4Address: string = await v4()
    cli.action.stop(`Your IPv4 address is ${ipV4Address}\n`)

    cli.action.start('Getting your IPv6 public address\n', 'checking', {stdout: true})
    const ipV6Address: string = await v6()
    cli.action.stop(`Your IPv6 address is ${ipV6Address}\n`)
  }
}
