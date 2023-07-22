import styles from '@/styles/default_layout/Buttons/Buttons.module.css'

const FunctionButton = ({ icon: Icon, size, text, color}) => {
    return (
        <button className={styles.buttons}  style={{ backgroundColor: color }}>
           <Icon size={size} color="#FFF" />
           <div>
                {text}
           </div>
           
        </button>
    )
}

export default FunctionButton;