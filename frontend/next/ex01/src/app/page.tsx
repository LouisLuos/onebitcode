import styles from "./page.module.css"
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.content}>
      {/* Título centralizado no topo */}
      <div className={styles.headerArea}>
        <h1>Conheça a família MacBook</h1>
        <p>Agora com novos modelos M3</p>
      </div>

      {/* Container horizontal para os cards */}
      <div className={styles.cardsRow}>
        
        {/* Card 1 */}
        <div className={styles.container}>
          <div className={styles.imgProduct}>
            <Image
              src="https://www.apple.com/v/mac/home/ca/images/overview/select/product_tile_mba_13_15__fx2g3qlubdym_large.png"
              alt="notebook1"
              width={280}
              height={200}
              className={styles.imageItem}
            />
          </div>
          <div className={styles.titleProduct}>
            <h2>MacBook Air de 13 e 15 pol.</h2>
            <span>Chip M2 ou M3</span>
          </div>
          <div>
            <span>Superfinos e rápidos para trabalhar de qualquer lugar.</span>
          </div>
          <div className={styles.descriptionText}>
            <p>A partir de R$ 916,58/mês ou R$ 10.999*</p>
          </div>
          <div>
            <button className={styles.button}>Comprar</button>
            <button className={styles.button}>Saiba mais</button>
          </div>
        </div>

        {/* Card 2 */}
        <div className={styles.container}>
          <div className={styles.imgProduct}>
            <Image
              src="https://www.apple.com/v/mac/home/ca/images/overview/select/product_tile_mbp_14_16__bkl8zusnkpw2_large.png"
              alt="notebook2"
              width={280}
              height={200}
              className={styles.imageItem}
            />
          </div>
          <div className={styles.titleProduct}>
            <h2>MacBook Air de 13 e 15 pol.</h2>
            <span>Chip M2 ou M3</span>
          </div>
          <div>
            <span>Superfinos e rápidos para trabalhar de qualquer lugar.</span>
          </div>
          <div className={styles.descriptionText}>
            <p>A partir de R$ 916,58/mês ou R$ 10.999*</p>
          </div>
          <div>
            <button className={styles.button}>Comprar</button>
            <button className={styles.button}>Saiba mais</button>
          </div>
        </div>

      </div>
    </div>
  );
}