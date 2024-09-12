import styles from "./research.module.css";

export default function Research() {
    return (
        <main className={styles.main}>
            <div className={styles.content}>
                <div className={styles.interest}>
                    <p className={styles.interestTitle}>Area(s) of Interest</p>
                    <hr></hr>
                    <p>My interests broadly lie in <b>algorithmic fairness</b> &mdash; particularly in the domains of hiring, education, healthcare, and criminal justice &mdash; as well as <b>AI governance</b> and <b>tech policy</b>. I&apos;d like to investigate the use of machine learning algorithms in social systems that have been historically discriminatory and biased through theoretical models and causal inference.</p>
                    <p>In the near future, I plan on applying to PhD programs in Computer Science that focus on the above areas, and hope to integrate literature in <b>Psychology</b>, <b>Sociology</b>, <b>Economics</b>, <b>Queer Theory</b>, and <b>Critical Race Theory</b> into my work.</p>
                </div>
                <div className={styles.papers}>
                    <div className={styles.ongoing}>
                        <h2 className={styles.ongoingTitle}>Ongoing Paper(s)</h2>
                        <div className={styles.projectDescription}>
                            <p><b>Project Description</b>: Machine learning (ML) models are increasingly being used in a wide range of application
                            domains (e.g., loan applications, healthcare, hiring, criminal justice, etc.). There is mounting
                            concern that the complexity and opacity of ML models perpetuates systemic biases and discrimination reflected in
                            training data. The naive way to determine whether a model is biased is to compare its predictions on
                            subpopulations of the test data. Imagine implementing this process on an expensive multi-layer feed-forward
                            neural network -- only to find that the model is biased and should not be used for the task. It is of interest to
                            determine whether an ML model is fair even before deploying it in practical real-time applications.</p>
                        </div>
                        <div className={styles.rq}>
                        <p><b>RQ</b>: Can we measure the goodness of data for fairness of downstream ML tasks?</p>
                        </div>
                    </div>

                    <div className={styles.review}> 
                        <h2 className={styles.reviewTitle}>Under Review</h2>
                        <h3> The &#39;Who,&#39; &#39;How,&#39; and &#39;When,&#39; of Elite Political Discourse on Twitter/X Before and After the Murder of George Floyd.</h3>
                        <div className={styles.coauthors}> Alyssa Smith, Ahana Bhattacharya, Holliday Sims, Kenneth Joseph</div>
                        {/* <div className={styles.conference}></div> */}
                        <div className={styles.abstract}>
                            <p><b>Abstract</b>: Most U.S. Twitter/X users are not exposed to, and do not engage with, much political talk on average, yet strong evidence indicates that many Americans 
                            are aware of political movements and are often, in fact, tired of hearing about politics on social media. Additionally, much of the work on online political discussion in the U.S. 
                            context focuses on traditional political elites and speech that discusses American electoral politics. However, there exist other influential accounts on social media besides 
                            political elites, and there are other topics of political discussion besides American electoral politics; there is still work to be done to understand who mobilizes with a 
                            political movement, when they do so, and to what extent they engage. The present work targets these questions, aided by a unique combination of mixed methods analyses, a dataset of 
                            the following relationships in 2020 of 1.4 million American voters linked to Twitter/X accounts, and an archive of the Twitter/X Decahose, a 10% random streaming sample of all tweets. 
                            Using a recently proposed method for clustering frequently followed accounts, we create a taxonomy of account clusters, ranging from golf turf enthusiasts to liberal activists. We 
                            then examine the mobilization of these clusters after George Floyd&apos;s murder, measuring levels of discussion of U.S. electoral politics and of the Black Lives Matter movement. 
                            Our findings show that seemingly apolitical elites actually mobilized more after Floyd&apos;s death than political elites did. We also emphasize the importance of temporality in measuring 
                            mobilization. While Twitter/X users may not see much political talk on average, significant spikes in political and BLM-related discourse occurred after Floyd&apos;s death, and these 
                            resulted in persistent changes in levels of BLM-related discussion. Our findings problematize current conceptions of online political behavior and suggest new ways to investigate 
                            civic engagement on social media.</p>
                        </div>

                        <h3> Justice in Child Welfare Policy: Towards the Development of a Contextual Ethics Framework for Deployment of AI in Human Service Systems.</h3>
                        <div className={styles.coauthors}>Maria Rodriguez, Seventy Hall, Kenneth Joseph, Ahana Bhattacharya, Benson Cai, Hannah Wilcox, and Connor Wurst</div>
                        {/* <div className={styles.conference}></div> */}
                        <div className={styles.abstract}>
                            <p><b>Abstract</b>: Scholars investigating AI in high stakes settings have proposed ML solutions ranging from reformist to progressive, attempting to adjudicate between justice as equity and 
                            justice as fairness. Progressive work asks the system to reorder its prioritization of the values that define justice (equity), while reformist work builds tools that work within the existing 
                            justice value structure (fairness). The present work asks: what are the justice values (implied or enacted) by state-level child welfare administrative policy in the United States? We conduct 
                            a mixed-methods analysis of child welfare policy in the United States and find a range of implied justice values within administrative rules, from established concepts like fairness and equity 
                            to more nuanced foci on bodies as property. Our work contributes to a deeper understanding of the interplay between AI and policy, highlighting the importance of enacted values in shaping how we 
                            design AI tools in high stakes decision settings.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
  }