import styles from "./name-letter.module.css";

interface INameLetterProps {
  letter: string;
  color: string;
}

function NameLetter({ letter, color }: INameLetterProps) {
  return (
    <span className={styles.nameLetter} style={{ backgroundColor: color }}>
      {letter}
    </span>
  );
}

export default NameLetter;
