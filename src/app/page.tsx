'use client'

import { useState } from "react";
import "./globals.css";
import styles from "./page.module.css";
import Modal from "@/app/components/modal/modal"

export default function Home() {
  const [modalIsOpen, setModalIsOPen] = useState(false)

  function handleModal(){
    setModalIsOPen(!modalIsOpen);
  }

  return (
    <main className={styles.main}>
        <div className={`${styles.divButton} ${styles.center}`}>
          <button type="button" className={`button ${styles.button}`} onClick={handleModal}>Começar a Detecção</button>
          <p className={styles.text}>Nosso modelo de dectecção foi feito utilizando os dados da competição "RSNA Screening Mammography Breast Cancer Detection AI Challenge (2023)".</p>
          <p className={styles.text}> Acesse o link: <a href="https://www.kaggle.com/competitions/rsna-breast-cancer-detection/overview">RSNA Screening Mammography Breast Cancer Detection</a> para saber mais sobre os dados utilizados.</p>
        </div>
        <Modal isOpen={modalIsOpen} isClosed={handleModal}></Modal>
    </main>
  );
}
