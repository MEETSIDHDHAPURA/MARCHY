import React from 'react'
const Header = () => {
    return (
        <header class="header">
            <nav class="navigation nav">
                <h1 class="logo">MARCHY</h1>
                <ul class="nav-items">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Pages</a></li>
                    <li><a href="#">Service</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Blog</a></li>
                </ul>
                <button type='button' class="btn-nav">Contact Us</button>
            </nav>
        </header>
    )
}
export default Header