import React from 'react';

function Header() {
    return (
        <section id="tribute-info">
            <blockquote cite="https://artsandculture.google.com/story/qQWBkzWr7i05tA">
                <p>"The road ahead is not altogether a smooth one"</p>
                <cite>-- Martin Luther King Jr.</cite>
            </blockquote>
            <h3>If you have time, you should read more about this incredible human being on his <a
                id="tribute-link"
                href="https://en.wikipedia.org/wiki/Martin_Luther_King_Jr."
                target="_blank"
                rel="noreferrer"
            >Wikipedia entry</a>.
            </h3>
        </section>
    );
}

export default Header;