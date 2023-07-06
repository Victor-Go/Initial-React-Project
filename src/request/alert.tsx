import { Alert } from 'antd'
import ReactDOM from 'react-dom/client'

let root: ReactDOM.Root

export const showAlert = (message: string, description: string) => {
  let dom = document.getElementById('global-alert')
  if (!dom) {
    dom = document.createElement('div')
    dom.setAttribute('id', 'global-alert')
    document.body.appendChild(dom)
  }
  if (root) root.unmount()
  root = ReactDOM.createRoot(dom)
  root.render(
    <Alert
      className='alert'
      message={message.toString()}
      description={description.toString()}
      type='error'
      showIcon
      closable
    />
  )
}
