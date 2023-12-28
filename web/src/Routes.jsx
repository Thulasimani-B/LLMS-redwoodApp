// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'
import NavLayout from './layouts/NavLayout/NavLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/" page={HomePage} name="home" />
      <Set wrap={NavLayout}>
      <Route path="/contact-us" page={ContactUsPage} name="contactUs" />
      <Route path="/about-us" page={AboutUsPage} name="aboutUs" />
      <Route path='/return-book/{id:Int}' page={ReturnBookPage} name='returnBook'/>

      <Set wrap={ScaffoldLayout} title="LendBooks" titleTo="lendBooks" buttonLabel="New LendBook" buttonTo="newLendBook">
        <Route path="/lend-books/new" page={LendBookNewLendBookPage} name="newLendBook" />
        <Route path="/lend-books/{id:Int}/edit" page={LendBookEditLendBookPage} name="editLendBook" />
        <Route path="/lend-books/{id:Int}" page={LendBookLendBookPage} name="lendBook" />
        <Route path="/lend-books" page={LendBookLendBooksPage} name="lendBooks" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Members" titleTo="members" buttonLabel="New Member" buttonTo="newMember">
        <Route path="/members/new" page={MemberNewMemberPage} name="newMember" />
        <Route path="/members/{id:Int}/edit" page={MemberEditMemberPage} name="editMember" />
        <Route path="/members/{id:Int}" page={MemberMemberPage} name="member" />
        <Route path="/members" page={MemberMembersPage} name="members" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Books" titleTo="books" buttonLabel="New Book" buttonTo="newBook">
        <Route path="/books/new" page={BookNewBookPage} name="newBook" />
        <Route path="/books/{id:Int}/edit" page={BookEditBookPage} name="editBook" />
        <Route path="/books/{id:Int}" page={BookBookPage} name="book" />
        <Route path="/books" page={BookBooksPage} name="books" />
      </Set>
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
