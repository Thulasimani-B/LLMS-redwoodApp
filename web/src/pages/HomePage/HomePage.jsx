import {Link, routes} from '@redwoodjs/router'

const HomePage = () => {
  return (
    <>
      <div className='homepage'>
        <div className='homepageContainer'>
        <h1 style={{textAlign:'center'}}>Lending Library Management System</h1>
        <div className='homePageBtns'>
        <button className='signUpBtn'>Sign Up</button>
        <button className='logInBtn'>Log In</button>
        </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
