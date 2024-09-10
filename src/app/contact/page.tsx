import styles from "./contact.module.css";

export default function Contact() {
    return (
        <main className = {styles.main}>
            <div className = {styles.text}>
                <p>Feel free to reach out at <a href="mailto:ahanabhattchrya@gmail.com">ahanabhattchrya[at]gmail[dot]com</a> to grab a cup of coffee or just chat!</p>
                <p>If you’re new to NYC like me (or not) and are looking for coffee/matcha shops, here are a few of my favorite ones:</p>
                <ol className={styles.coffeeShops}>
                    <li className={styles.coffeeShopsItem}>Semicolon Cafe</li>
                    <li className={styles.coffeeShopsItem}>Oslo Coffee Roasters</li>
                    <li className={styles.coffeeShopsItem}>Bunny&Bro Coffee</li>
                    <li className={styles.coffeeShopsItem}>Tadaima (Bkln)</li>
                    <li className={styles.coffeeShopsItem}>RoundK by Sol Coffee</li>
                    <li className={styles.coffeeShopsItem}>Frame</li>
                </ol>
            </div>
        </main>
    );
  }