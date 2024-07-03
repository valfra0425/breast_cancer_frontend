"use client"

import styles from "./page.module.css"
import { ChangeEvent, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { formData, formDataSchema } from "../utils/definitions";
import { zodResolver } from '@hookform/resolvers/zod';

export default function Form() {
    const { register, control, handleSubmit, formState: { errors } } = useForm<formData>({ resolver: zodResolver(formDataSchema) });
    const [fileNama, setFileName] = useState<string | undefined>();

    const onSubmit = (data: formData) => {
        return console.log(data)
    }

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const fileNama = event.target.files?.[0].name;
        setFileName(fileNama);
    };

    return (
        <main className={styles.main}>
            <div className={`${styles.divForm} ${styles.mb}`}>
                <h1 className={`${styles.h1} ${styles.mb}`}>Formulário de submissão</h1>
                <p className={`${styles.mb} ${styles.p}`}> <strong>Atenção:</strong> Ao preencher os dados deste formulário, você estará contribuindo para a melhoria da precisão do nosso modelo de imagem, ajudando a garantir diagnósticos mais confiáveis. Estamos comprometidos com a proteção da sua privacidade e asseguramos que seus dados serão utilizados de forma anônima, sem qualquer associação à sua identidade.</p>
                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>

                    <fieldset className={`${styles.fieldset} ${styles.inputSize} ${styles.radioInputDiv} ${styles.mb}`}>
                        <legend className={styles.legend}>A mamográfia é referente a qual seio?</legend>
                        <div className={styles.radioDiv}>
                            <div>
                                <input type="radio" id="L" {...register("laterality")} value={"L"} />
                                <label htmlFor="L" className={styles.mf}>Esquerda</label>
                            </div>
                            <div>
                                <input type="radio" id="R" {...register("laterality")} value={"R"} />
                                <label htmlFor="R" className={styles.mf}>Direita</label>
                            </div>
                        </div>
                        {errors.laterality && <span className={styles.inputError}>{errors.laterality.message}</span>}
                    </fieldset>

                    <fieldset className={`${styles.fieldset} ${styles.inputSize} ${styles.marginInput} ${styles.mb}`}>
                        <legend className={styles.legend}>Qual a sua idade?</legend>
                        <input className={styles.input} type="number" id="age" {...register("age")} />
                        {errors.age && <span className={styles.inputError}>* Informe um valor válido </span>}
                    </fieldset>

                    <fieldset className={`${styles.fieldset} ${styles.inputSize} ${styles.radioInputDiv} ${styles.mb}`}>
                        <legend className={styles.legend}>Qual é a orientação da imagem?</legend>
                        <div className={`${styles.radioDiv} ${styles.radioDivSM}`}>
                            <div className={styles.radioDivItem}>
                                <input type="radio" id="mlo" value={"MLO"} {...register("view")} />
                                <label htmlFor="mlo" className={styles.mf}>MLO</label>
                            </div>
                            <div className={styles.radioDivItem}>
                                <input type="radio" id="cc" value={"CC"} {...register("view")} />
                                <label htmlFor="cc" className={styles.mf}>CC</label>
                            </div>
                            <div className={styles.radioDivItem}>
                                <input type="radio" id="at" value={"AT"} {...register("view")} />
                                <label htmlFor="at" className={styles.mf}>AT</label>
                            </div>
                            <div className={styles.radioDivItem}>
                                <input type="radio" id="ml" value={"ML"} {...register("view")} />
                                <label htmlFor="ml" className={styles.mf}>ML</label>
                            </div>
                            <div>
                                <input type="radio" id="lm" value={"LM"} {...register("view")} />
                                <label htmlFor="lm" className={styles.mf}>LM</label>
                            </div>
                        </div>
                        {errors.view && <span className={styles.inputError}>{errors.view.message}</span>}
                    </fieldset>

                    <fieldset className={`${styles.fieldset} ${styles.inputSize} ${styles.radioInputDiv} ${styles.mb}`}>
                        <legend className={styles.legend}>Você tem algum implante no seio?</legend>
                        <div className={styles.radioDiv}>
                            <div>
                                <input type="radio" id="implant_false" value={"false"} {...register("implant")} />
                                <label htmlFor="implant_false" className={styles.mf}>Não</label>
                            </div>
                            <div>
                                <input type="radio" id="implant_true" value={"true"} {...register("implant")} />
                                <label htmlFor="implant_true" className={styles.mf}>Sim</label>
                            </div>
                        </div>
                        {errors.implant && <span className={styles.inputError}>{errors.implant.message}</span>}
                    </fieldset>

                    <fieldset className={`${styles.fieldset} ${styles.inputSize} ${styles.radioInputDiv} ${styles.marginInput} ${styles.mb}`}>
                        <legend className={styles.legend}>Você já realizou uma biopsia referente a esse seio?</legend>
                        <div className={styles.radioDiv}>
                            <div>
                                <input type="radio" id="biopsy_false" value={"false"} {...register("biopsy")} />
                                <label htmlFor="biopsy_false" className={styles.mf}>Não</label>
                            </div>
                            <div>
                                <input type="radio" id="biopsy_true" value={"true"} {...register("biopsy")} />
                                <label htmlFor="biopsy_true" className={styles.mf}>Sim</label>
                            </div>
                        </div>
                        {errors.biopsy && <span className={styles.inputError}>{errors.biopsy.message}</span>}
                    </fieldset>

                    <p className={`${styles.mb} ${styles.p}`}>Se você já teve os resultados da sua mamografia analisados por um médico, por favor, responda às perguntas abaixo. Caso contrário, pode deixá-las em branco.</p>
                    <fieldset className={`${styles.fieldset} ${styles.inputSize} ${styles.radioInputDiv} ${styles.mb}`}>
                        <legend className={styles.legend}>O resultado da sua mamográfia foi positivo ou negativo para câncer?</legend>
                        <div className={styles.radioDiv}>
                            <div>
                                <input type="radio" id="cancer_false" value={"false"} {...register("cancer", { setValueAs: () => { "false" } })} />
                                <label htmlFor="cancer_false" className={styles.mf}>Negativo</label>
                            </div>
                            <div>
                                <input type="radio" id="cancer_true" value={"true"} {...register("cancer", { setValueAs: () => { "true" } })} />
                                <label htmlFor="cancer_true" className={styles.mf}>Positivo</label>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset className={`${styles.fieldset} ${styles.inputSize} ${styles.radioInputDiv} ${styles.marginInput} ${styles.mb}`}>
                        <legend className={styles.legend}>Se positivo, o cancer era invasivo?</legend>
                        <div className={styles.radioDiv}>
                            <div>
                                <input type="radio" id="invasive_false" value={"false"} {...register("invasive", { setValueAs: () => { "false" } })} />
                                <label htmlFor="invasive_false" className={styles.mf}>Não</label>
                            </div>
                            <div>
                                <input type="radio" id="invasive_true" value={"true"} {...register("invasive", { setValueAs: () => { "true" } })} />
                                <label htmlFor="invasive_true" className={styles.mf}>Sim</label>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset className={`${styles.fieldset} ${styles.inputSize} ${styles.radioInputDiv} ${styles.mb}`}>
                        <legend className={styles.legend}>Se negativo, era um resultado de negativo dificil de identificar?</legend>
                        <div className={styles.radioDiv}>
                            <div>
                                <input type="radio" id="dmc_false" value={"false"} {...register("difficult_negative_case", { setValueAs: () => { "false" } })} />
                                <label htmlFor="dmc_false" className={styles.mf}>Não</label>
                            </div>
                            <div>
                                <input type="radio" id="dmc_true" value={"true"} {...register("difficult_negative_case", { setValueAs: () => { "true" } })} />
                                <label htmlFor="dmc_true" className={styles.mf}>Sim</label>
                            </div>
                        </div>
                    </fieldset>

                    <div className={`${styles.mb} ${styles.inputFileDiv}`}>
                        <Controller
                            name="image"
                            control={control}
                            render={({ field: { onChange, ref } }) => (
                                <>
                                    <label htmlFor="myfile" className={`button ${styles.button}`}>Escolha um arquivo</label>
                                    <input
                                        type="file"
                                        id="myfile"
                                        name="image"
                                        style={{ display: "none" }}
                                        onChange={(e) => {
                                            handleFileChange(e);
                                            onChange(e.target.files);
                                        }}
                                        ref={ref}
                                    />
                                    <span id="file-name" className={styles.inputFileSpan}>{fileNama}</span>
                                    {errors.image && <p className={`${styles.inputError} ${styles.p}`}>{errors.image.message?.toString()}</p>}
                                </>
                            )}
                        />
                    </div>

                    <div style={{ width: "100%" }} className="center">
                        <button type="submit" className={`button ${styles.button}`}>Enviar</button>
                    </div>
                </form>
            </div>
        </main>
    );
}