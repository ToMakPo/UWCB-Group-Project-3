// import { Link } from 'react-router-dom'
import Jumbotron from "./Jumbotron"
import LogoutButton from "./LogoutButton"

import '../styles/PageHeader.css'
import '../styles/palette.css'

const PageHeader = ({ loggedIn }) => {
    return (
        <>
            <header className="mb-3">
                <Jumbotron />
                {loggedIn && <LogoutButton />}
            </header>
        </>
    )
}

export default PageHeader