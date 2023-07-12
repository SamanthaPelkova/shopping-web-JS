import React from 'react';

export default function Header(props) {
  return (
    <header className="block row center">
      <div>
        <a href="#/">
          <h1>Můj malý obchůdek :)</h1>
        </a>
      </div>
      <div>
        <a href="#/cart">
          Košík{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}
        </a>{' '}
        <a href="#/signin"> Přihlásit se</a>
      </div>
    </header>
  );
}
