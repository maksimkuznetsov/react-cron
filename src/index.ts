import Cron from './Cron'
import * as converter from './converter'
import * as locale from './locale'

export * from './types'

// Support "import { Cron } from 'react-js-cron'"
// Support "import { Cron as ReactJSCron } from 'react-js-cron'"
export { Cron, converter, locale }

// Support "import Cron from 'react-js-cron'"
export default Cron
