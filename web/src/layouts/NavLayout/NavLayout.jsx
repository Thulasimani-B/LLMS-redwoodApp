import {Link,routes} from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

const NavLayout = ({ children }) => {
  return <>
  <div className='navLayout'>
  <Toaster toastOptions={{className:'rw-toast', duration:5000}}/>
      <h1 style={{textAlign:'center'}} className="appTitle">Lending Library Management System</h1>

      <nav className="NavBar">
        <ul>
          <li><Link to={routes.books()}>Books</Link></li>
          <li><Link to={routes.members()}>Members</Link></li>
          <li><Link to={routes.lendBooks()}>LendBook</Link></li>
          <li><Link to={routes.aboutUs()}>AboutUs</Link></li>
          <li><Link to={routes.contactUs()}>ContactUs</Link></li>
        </ul>
      </nav>

     <main>{children}</main>

    </div>

  </>
}

export default NavLayout
