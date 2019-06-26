// 不同环境配置不同的Api请求地址
import dev from './config.dev'
import pro from './config.prod'

let Api_Base_Url = process.env.Node_Env
let config = null
switch (Api_Base_Url) {
  case 'development': config = dev;
    break;
  case 'production': config = pro;
    break;
}
export default config