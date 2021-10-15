import '../styles/globals.css'

import AssistantAppsBase from '../Parts/AssistantAppsBase'

function MyApp({ Component, pageProps }) {
  return (
    <AssistantAppsBase>
      <Component {...pageProps} />
    </AssistantAppsBase>
  )
}

export default MyApp
