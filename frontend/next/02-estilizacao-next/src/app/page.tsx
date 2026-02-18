"use client"

import { Card, Heading } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import styles from "./page.module.css";
import Image from "next/image";


export default function Home() {  
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <nav>
          <ul>
            <li><a href="#">Link 1</a></li>
            <li><a href="#">Link 2</a></li>
            <li><a href="#">Link 3</a></li>
          </ul>
        </nav>
      </header>
      <Heading as="h1">Bem vindo ao next</Heading>
      <main className={styles.main}>
        <Card>
          <h1>Olá, Next.js!</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          <ul>
            <li>
              <div>
                Via Lactos
              </div>
              <Image
                src="/via-lactea.jpg"
                alt="Picture of the author"
                width={500}
                height={500}
                style={{objectFit: "cover"}}
              />
            </li>
            <li>
              <div>
                Foguete
              </div>
              <Image
                src="https://images-assets.nasa.gov/image/KSC-20260210-PH-JBS01-0188/KSC-20260210-PH-JBS01-0188~medium.jpg"
                alt="Foguete em pré lançamento"
                width={500}
                height={500}
                style={{objectFit: "cover"}}
              />
            </li>
            <li>Item 3</li>
          </ul>
        </Card>
      </main>
    </div>
  );
}