import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar'
import './index.scss'

// find out why home component is not being rendered (this component has the "Hi, I'm Aniyah, web developer" text with the animated letter component being used inside)

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <span className="tags top-tags">&lt;body&gt;</span>

        <Outlet />

        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span>
      </div>
    </div>
  )
}

export default Layout
