import { ReactComponent as CartIcon } from './cart.svg'
import styles from './miniCart.module.css'

export const MiniCart = () => (
    <div className={styles.container}>
        <CartIcon className={styles.icon} />
        <span aria-live="assertive">0 items</span>
    </div>
)
