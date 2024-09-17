"use client";

import styles from "./navbar.module.css";
import Link from 'next/link';
import Research from "./research/page"
import { usePathname } from 'next/navigation';


export default function Navbar(){
    const router = usePathname();
    return(
        <header className={styles.header}>
            <div className={styles.wrap}>
                <div className={styles.nameBlock}>
                    <a href="/" className={styles.header_title}>Ahana B.</a>
                    <a className={styles.pronouns} href="https://cdn.ostem.org/publicfiles/PronounsWhyTheyMatter.pdf">she/her</a>
                </div>
                <div className={styles.menu}>
                    <ul className={styles.menu_list}>
                        <li className={styles.menu_list_item}>
                            <Link href="/research" className={`${styles.menu_list_item_link} ${router == '/research' ? styles.active : ''}`}>Research</Link>
                            <Link href="/ahana_cv.pdf" className={`${styles.menu_list_item_link} ${router == '/ahana_cv.pdf' ? styles.active : ''}`}>CV</Link>
                            <Link href="/travel" className={`${styles.menu_list_item_link} ${router == '/travel' ? styles.active : ''}`}>Travel</Link>
                            <Link href="/contact" className={`${styles.menu_list_item_link} ${router == '/contact' ? styles.active : ''}`}>Coffee?</Link>
                        </li>
                    </ul>
                </div>
            </div>       
        </header>
    )
}