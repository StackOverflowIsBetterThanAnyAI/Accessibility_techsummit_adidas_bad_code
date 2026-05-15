import styles from './footer.module.css'
export const Footer = () => (
    <div className={styles.footerMenu}>
        <div>
            <div>
                <a href="/home">Home</a>
            </div>
            <div>
                <a href="/about">About</a>
            </div>
            <div>
                <a href="/contact">Contact</a>
            </div>
            <div>
                <a href="/blog">Blog</a>
            </div>
        </div>
    </div>
)
