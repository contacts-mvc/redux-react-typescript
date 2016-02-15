/// <reference path="typings/tsd.d.ts" />

import 'reset-css/reset.css';
import 'contacts-mvc-css/index.css';

import * as React from 'react';
import {render} from 'react-dom';

const TEMPLATE = (
    <main>
        <aside className="side-bar">
          <div className="search-box">
            <input type="search" placeholder="Search..." />
          </div>
          <div className="list">
	           <ul>
               <li className="divider">A</li>
               <li>Adam&nbsp;<em>Peterson</em></li>
               <li className="divider">P</li>
               <li className="selected">Peter&nbsp;<em>Griffin</em></li>
             </ul>
          </div>
        </aside>
        <div className="details">
          <header>
            <div className="picture">
              <div className="initials">PG</div>
            </div>
            <div className="title">
              <h1 className="name">Peter Griffin</h1>
              <div className="subtitle">Important stuff</div>
            </div>
          </header>
          <table>
            <tbody>
              <tr>
                <td>email</td>
                <td>some@example.com</td>
              </tr>
              <tr>
                <td>phone</td>
                <td>(310) 923-8923</td>
              </tr>
            </tbody>
          </table>
          <footer>
            <div className="left">
              <button>+</button>
            </div>
            <div className="right">
              <button>Delete</button>
              <button>Edit</button>
            </div>
          </footer>
        </div>
     </main>
);

render(TEMPLATE, document.querySelector('main'));
