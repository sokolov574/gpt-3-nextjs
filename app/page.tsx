import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import mainImage from '@/assets/images/main-image.png';


export default function Home() {
  return (
    <>
    <main>
   {/*  <h1>Cringe AI</h1>
    <h2>powered by GPT-3</h2>
    <div>Enter a topic and the AI will generate a super cringy motivational quote</div> */}

    <div className={styles.mainImageContainer}>
        <Image
            src={mainImage}
            fill
            alt='A picture of a woman holding both her hands in front of her face'
            priority
            className={styles.mainImage}
        />
    </div>
    </main>
      </>
  );
}
