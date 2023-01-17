import React from "react";
import styles from "./Footer.module.css"


class Footer extends React.Component {

    render () {
        return (
            <div className={styles.footer}>
                <p>Este é o Footer</p>
            </div>
    )};
}

export default Footer;