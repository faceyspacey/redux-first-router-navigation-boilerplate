import { Platform } from 'react-native'

const ENVIRONMENTS = {
  production: { BASE_URL: '', API_KEY: '' },
  staging: { BASE_URL: '', API_KEY: '' },
  development: {
    BASE_URL: '',
    API_KEY: '',
    URI_PREFIX: Platform.OS === 'ios' ? 'spiritapp://' : 'http://www.celebvidy.com/'
  }
}

export default env =>
  ENVIRONMENTS[env] || ENVIRONMENTS.development

