import styles from "./modal.module.css";
import Link from "next/link";

interface modalProps {
    isOpen: boolean;
    isClosed: () => void;
}

export default function Modal({isOpen, isClosed}: modalProps){
    if (!isOpen) return null

    return (
        <div className={styles.main}>
            <div className={styles.hidebackground} onClick={isClosed}/>
            <div className={styles.message}>
                <button type="button" className={styles.closeButton} onClick={isClosed}>X</button>
                <h1 className={styles.h1}>Aviso Importante!</h1>
                <p className={styles.text}> Este modelo de detecção de câncer de mama é uma ferramenta de auxílio à decisão e não deve substituir a avaliação de um profissional médico qualificado. Embora tenhamos nos esforçado para criar um sistema preciso e confiável, é fundamental entender que os resultados fornecidos por este software são apenasindicativos e não devem ser interpretados como diagnóstico médico definitivo.</p>
                <Link href={"/form"}  className={`button ${styles.button}`}>Continuar</Link>
            </div>
        </div>
    );
}