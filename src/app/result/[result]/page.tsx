'use client';

import "../../globals.css";
import styles from "./page.module.css";
import { useRouter } from 'next/navigation';

export default function Result({ params }: { params: { result: string } }) {
  const param = params.result;
  const router = useRouter();

  if (Number(param) != 1 && Number(param) != 0) {
    router.push('/form');
  }

  const result = param === '1' ? "Positivo" : "Negativo";

  // 1 para True e 0 para False
  // fazer um render condicional para qulaquer um desses valores

  return (
    <main className={styles.main}>
      <div className={`${styles.div} center`}>
        <h1 className={styles.h1}> Resultado: {result}</h1>
        <p className={styles.text}><strong>Importante: </strong>Este modelo de detecção de câncer de mama é uma ferramenta de auxílio à decisão e não deve substituir a avaliação de um profissional médico qualificado. Embora tenhamos nos esforçado para criar um sistema preciso e confiável, é fundamental entender que os resultados fornecidos por este software são apenas indicativos e não devem ser interpretados como diagnóstico médico definitivo.</p>
        <p className={styles.text}>Nosso modelo possui uma taxa de acerto de 59%. Portanto, é imprescindível a análise de um profissional para qualquer decisão médica.</p>
      </div>
    </main>
  );
}
