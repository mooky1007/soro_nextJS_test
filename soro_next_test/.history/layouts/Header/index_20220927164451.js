import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
    return(
        <header>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <Link href="/" passHref>
                        <a className="navbar-brand mt-1">
                            <Image src="/img/soronext.jpg" alt="SORONextJS" width={155} height={23}/>
                        </a>
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link href="/Page01" passHref>
                                    <a href="/Page01" className="nav-link active" aria-current="page">Page01</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                            <Link href="/Page02" passHref>
                                <a href="/Page02" className="nav-link active" aria-current="page">Page02</a>
                            </Link>
                            </li>
                            <li className="nav-item">
                            <Link href="/Page03" passHref>
                                <a href="/Page03" className="nav-link active" aria-current="page">Page03</a>
                            </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;