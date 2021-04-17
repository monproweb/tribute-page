import React from 'react';

function Header() {
    return (
        <div className="header">
            <h1 id="title">Martin Luther King Jr.</h1>
            <p>The Man Who Made His Dream a Reality</p>
            <figure id="img-div">
                <img
                    id="image"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Martin_Luther_King_-_March_on_Washington.jpg/1024px-Martin_Luther_King_-_March_on_Washington.jpg"
                    alt="King gave his most famous speech, I Have a Dream, before the Lincoln Memorial during the 1963 March on Washington for Jobs and Freedom."
                />
                <figcaption id="img-caption">
                    King gave his most famous speech, I Have a Dream, before the Lincoln Memorial during the 1963 March on Washington for Jobs and Freedom.
  </figcaption>
            </figure>
        </div>
    );
}

export default Header;