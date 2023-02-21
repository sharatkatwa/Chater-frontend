import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMessage,
  faImage,
  faHandshake,
} from '@fortawesome/free-regular-svg-icons'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import styles from './Header.module.css'

function Header(): JSX.Element {
  return (
    <header className={styles.header_containter}>
      <div className={styles.logo}>
        <p className={styles.logo_text}>
          <span className={styles.logo_first_letter}>C</span>hate
          <span className={styles.logo_last_letter}>r</span>
        </p>
      </div>
      <div className={styles.nav}>
        <ul className={styles.menu_nav}>
          <li className={`${styles.menu_nav__item} ${styles.active}`}>
            <a href='#' className={styles.menu_nav__link}>
              <FontAwesomeIcon
                className={styles.menu_nav__icon}
                icon={faMessage}
              />
              <span className={styles.menu_nav__text}> Chats</span>
            </a>
          </li>
          <li className={styles.menu_nav__item}>
            <a href='#' className={styles.menu_nav__link}>
              <FontAwesomeIcon
                className={styles.menu_nav__icon}
                icon={faImage}
              />
              <span className={styles.menu_nav__text}> story</span>
            </a>
          </li>
          <li className={styles.menu_nav__item}>
            <a href='#' className={styles.menu_nav__link}>
              <FontAwesomeIcon
                className={styles.menu_nav__icon}
                icon={faHandshake}
              />
              <span className={styles.menu_nav__text}> Friends</span>
            </a>
          </li>
          <li className={styles.menu_nav__item}>
            <a href='#' className={styles.menu_nav__link}>
              <FontAwesomeIcon icon={faGear} />
              <span className={styles.menu_nav__text}> settings</span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
