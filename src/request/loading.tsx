import { Spin } from 'antd'
import ReactDOM from 'react-dom/client'

let loadingCount = 0
let root: ReactDOM.Root

export const showLoading = () => {
  if (loadingCount === 0) {
    let dom = document.getElementById('global-loading')
    if (!dom) dom = document.createElement('div')
    dom.setAttribute('id', 'global-loading')
    document.body.appendChild(dom)
    if (root) root.unmount()
    root = ReactDOM.createRoot(dom)
    root.render(<Spin size='large' />)
  }
  loadingCount++
}

export const hideLoading = () => {
  loadingCount--
  if (loadingCount === 0) {
    const dom = document.getElementById('global-loading')
    if (root) root.unmount()
    if (dom) document.body.removeChild(dom)
  }
}
