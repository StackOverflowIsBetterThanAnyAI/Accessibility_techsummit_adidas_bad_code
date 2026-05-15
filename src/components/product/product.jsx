import styles from './product.module.css'
import { ReactComponent as CartIcon } from './../miniCart/cart.svg'

export const Product = ({ product }) => {
    return (
        <div className={styles.container}>
            <div className={styles.heading}>{product.name}</div>
            <img className={styles.image} src={product.imageURL} />
            <p lang="es" className={styles.description}>
                {product.description}
            </p>
            <div className={styles.moreinfo}>
                <p className={styles.price} aria-labelledby="id">
                    MRP Rs.{product.price}
                </p>
                <div tabIndex="-1" className={styles.buynow} aria-valid>
                    <CartIcon className={styles.icon} />
                </div>
            </div>
        </div>
    )
}
