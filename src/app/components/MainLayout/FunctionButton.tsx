import styles from '@/styles/default_layout/Buttons/Buttons.module.css';
import { IconType } from 'react-icons';
import { TypeButton } from '@/app/@types/button';
import { useRouter } from 'next/navigation';

const FunctionButton: React.FC<TypeButton> = ({
  icon: Icon,
  size,
  texto,
  color,
  onClick,
  isOpen,
}) => {
  const route = useRouter();
  return (
    <>
    
    <button
      className={styles.buttons}
      onClick={() => route.push(onClick)}
      style={{ backgroundColor: color }}
    >
      <Icon size={size} color="#FFF" />
      {isOpen && (
        <span className={`text-white ml-3 text-xs  origin-left `}>{texto}</span>
      )}
    </button>
    </>
  );
};

export default FunctionButton;
