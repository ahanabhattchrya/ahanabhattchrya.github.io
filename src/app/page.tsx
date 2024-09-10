import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className = {styles.description}>
        <div className={styles.centerImage}>
          <Image
            className={styles.headshot}
            src="/ahana-cropped.png"
            alt="Ahana headshot"
            width={200}
            height={200}
          />
        </div>
        <div className={styles.textBox}>
          <div className={styles.text}>
            <p>
            Hi! My name is Ahana Bhattacharya, and I&apos;m a software engineer in NYC. I recently graduated from the University at Buffalo with a B.S. in Computer Science and a minor in Mathematics, where I worked 
            with <b><a href="https://cse.buffalo.edu/cubelab/people/">Kenny Joseph</a></b> in the <b><a href="https://cse.buffalo.edu/cubelab/">cUBe Lab</a></b>. I also work with <b><a href="https://romilapradhan.github.io/romila/">Romila Pradhan
            </a></b> in the <b><a href="https://romilapradhan.github.io/">Responsible Data Science Lab</a></b> at Purdue University. Feel free to read more about my research interests <b><a href="/research">here</a></b>.
            </p>
            <p>
            I grew up in Tōkyō, where I spent my high school years cafe and bookstore hopping — a tradition I continue in the city as well! In my free time,  I <del>try to</del> like to <b><a href="/travel">travel</a></b> and document my adventures through film photography. :) 
            </p>
          </div>
          {/* <hr className={styles.divider}></hr>
          
            <div className={styles.readingListText}> <p> Reading Lists </p> </div>
            
            <div className={styles.readingList}>
              <div className={styles.readingListStatus}> <p> Currently Reading</p> 
                <hr></hr>
                <ul className={styles.currReading}>
                  <li className={styles.currReadingItem}>The Memory Police</li>
                  <li className={styles.currReadingItem}>Food for Millionaires</li>
                  <li className={styles.currReadingItem}>Weapons of Math Destruction</li>
                </ul>
              </div>
            <div className={styles.readingListStatus}> <p> Recently Read </p>
              <hr></hr>
              <ul className={styles.recRead}>
                <li className={styles.recReadItem}>When Breath Becomes Air</li>
                <li className={styles.recReadItem}>Klara and the Sun</li>
                <li className={styles.recReadItem}>More Days at the Morisaki Bookshop</li>
                <li className={styles.recReadItem}>Days at the Morisaki Bookshop</li>
              </ul>
            </div>
          </div> */}
          {/* <p>I also love to read but didn't want to clutter my navbar so take a peek at my <a href="/readings">readings</a> or 
          check out my goodreads <a href="https://www.goodreads.com/user/show/127291654-ahana-bhattacharya">here</a>.</p> */}
        </div>
      </div>
    </main>
  );
}
