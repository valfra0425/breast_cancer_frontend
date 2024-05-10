import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={`col-9 ${styles.center}`}>
        <div className={`${styles.divButton} ${styles.center}`}>
          <button type="button" className={`${styles.btn}`}>Começar a Detecção</button>
          <p className={styles.white}>Nosso modelo de dectecção foi feito utilizando os dados da competição "RSNA Screening Mammography Breast Cancer Detection AI Challenge (2023)".</p>
          <p className={styles.white}> Acesse o link: <a className={styles.linkStyle} href="https://www.kaggle.com/competitions/rsna-breast-cancer-detection/overview">RSNA Screening Mammography Breast Cancer Detection</a> para saber mais sobre os dados utilizados.</p>
        </div>
      </div>
      <div className={`col-3 ${styles.divLogo} ${styles.center}`}>
        <Image src="/ribbon.png" alt="Fita da campanha contra o cancer de mama" width={300} height={300}/>
        <p className={styles.textLogo}>Prevenir é o melhor caminho</p>
      </div>
    </main>
  );
}
