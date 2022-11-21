import React from "react";
import Link from "next/link";
import styles from "styles/header.module.scss";
import Dropdown from "components/common/Dropdown";

const joinModules = (arr: string[]): string => arr.join(" ");

const Header = () => {
  return (
    <header id={styles.app_header}>
      <div id={styles.header_sub}>
        <div
          className={joinModules([
            styles.header_flex,
            styles.header_flex_justify_between,
          ])}
        >
          <div className="header_flex_item">
            <div className={styles.header_flex}>
              <div className="header_flex_item">
                <span>Chat with us</span>
              </div>
              <div className="header_flex_item">
                <span>+420 336 775 664</span>
              </div>
              <div className="header_flex_item">
                <span>info@freshnesecom.com</span>
              </div>
            </div>
          </div>
          <div className="header_flex_item">
            <nav className={styles.header_sub_nav}>
              <ul className={styles.header_flex}>
                <li>
                  <Link href="/link">Link</Link>
                </li>
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <Link href="/careers">Careers</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div
        id={styles.header_main}
        className={joinModules([
          styles.header_flex,
          styles.header_flex_justify_between,
        ])}
      >
        <div className="header_main_left">
          <h1 className="header_brand_name">Freshnesecom</h1>
        </div>
        <div className={styles.header_main_center}>
          <div className={styles.header_main_search}>
            <div className={styles.header_main_search_dropdown}>
              <Dropdown
                options={[
                  { value: 1, label: "Men" },
                  { value: 2, label: "Women" },
                ]}
                onChange={(value) => {
                  console.log(value);
                }}
              />
            </div>
            <div className={styles.header_main_search_input}>
              <input
                type="text"
                placeholder="Search Products, categories ..."
              />
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-search"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <circle cx="10" cy="10" r="7"></circle>
                  <line x1="21" y1="21" x2="15" y2="15"></line>
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div className="header_main_right">
          <div className={styles.header_flex}>
            <div className="header_flex_item">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-user"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                  <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                </svg>
              </span>
            </div>
            <div className="header_flex_item">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-shopping-cart"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <circle cx="6" cy="19" r="2"></circle>
                  <circle cx="17" cy="19" r="2"></circle>
                  <path d="M17 17h-11v-14h-2"></path>
                  <path d="M6 5l14 1l-1 7h-13"></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
