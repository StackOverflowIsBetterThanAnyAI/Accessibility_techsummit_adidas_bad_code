import styles from './navigation.module.css'

export const Navigation = ({ links }) => {
    const renderedLinks = links.map((link) => (
        <a
            key={`navigation_${link.id}`}
            href={link.text}
            className={styles.link}
        >
            {link.text}
        </a>
    ))
    return (
        <div className={styles.container}>
            {renderedLinks}
            <div className={styles.dropdown}>
                <button className={styles.dropbtn}>Dropdown</button>
                <div className={styles.dropdownContent}>
                    <a href="#1">Link 1</a>
                    <a href="#2">Link 2</a>
                    <a href="#3">Link 3</a>
                </div>
            </div>
        </div>
    )
}
