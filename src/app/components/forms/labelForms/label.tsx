import styles from '@/styles/Forms/label/label.module.css'

const Label =({label})=>{
    return (
        <>
         <h1 className={styles.label}>{label}</h1>
         <div className={styles.hrLine}></div>
        </>
    );
}

export default Label