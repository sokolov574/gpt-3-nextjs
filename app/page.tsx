import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import mainImage from '@/assets/images/main-image.png'
import { Form, Button, Spinner } from 'react-bootstrap'
import { FormEvent } from 'react'


export default function Home() {

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {

  }

  return (
    <>
      <main className={styles.main}>
        <h1>Cringe AI</h1>
        <h2>powered by GPT-3</h2>
        <div>Enter a topic and the AI will generate a super cringy motivational quote</div>
        <div className={styles.mainImageContainer}>
          <Image
            src={mainImage}
            fill
            alt='A picture of a woman holding both her hands in front of her face'
            priority
            className={styles.mainImage}
          />
        </div>
        <Form onSubmit={handleSubmit} className={styles.inputform}> 
          <Form.Group className='mb-3' controlId='prompt-input'> 
            <Form.Label>Create a cringy quote about...</Form.Label>
            <Form.Control type='text' placeholder='Enter a topic' />
          </Form.Group>
        /</Form>
      
      </main>
    </>
  )
}
