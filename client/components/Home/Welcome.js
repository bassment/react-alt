import shared from '../../css/shared.css';
import styles from '../../css/Welcome.css';

import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import Helmet from 'react-helmet';

export default class Welcome extends React.Component {
  static propTypes = {
    user: PropTypes.object,
    errorMessage: PropTypes.string
  };

  render() {
    return (
      <div>
        <Helmet title="React-Alt"/>
          <section className={shared.section}>
            <h1>Welcome!</h1>
            <p>If you want to Count...</p>
            <Link to="/count">
              <button
                className={styles.squareButton}>
                Click here!
              </button>
              </Link>
          </section>
      </div>
    );
  }
}
