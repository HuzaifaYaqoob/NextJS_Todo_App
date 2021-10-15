
import Link from 'next/link'


import styles from '../styles/Header.module.css'

const Header  = () =>{
    return(
        <>
            <header className={'bg-white'  + ' ' + (styles.header)}>
                <nav>
                    <ul>
                        <li>
                            <Link href='/'>
                                <a>Home</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header