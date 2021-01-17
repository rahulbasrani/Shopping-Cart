import React from 'react';

export default function Header(props) {
  return (
    <header className="block row center">
      <div>
        <a href="#/">
        <div className="one">
                <div className="cntrdiv">
                    <ul>
                        <li>M</li>
                        <li>Y</li>
                        <li>S</li>
                        <li>H</li>
                        <li>O</li>
                        <li>P</li>
                          
                    </ul>
                </div>
          </div>
        </a>
      </div>
      <div>
        <a href="#/cart">
          Cart{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}
        </a>{' '}
        <a href="#/signin"> SignIn</a>
      </div>
    </header>
  );
}