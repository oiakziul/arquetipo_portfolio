import styles from "../assets/styles/components/inicio.module.css"
export const Inicio = () => {
  return (

    <div style={{ marginLeft: '20px' }}>
      <br /><br />
      <h1 style={{ fontSize: '30px' }}>Notas da versão:</h1> <br /> <br />
      <h1 >
        Hoje 06/05/2025 <br /> <br />
        <br /> <br /> v1.1 - Modularização - Styled Componentes. <span className={styles.check}>✔✔</span>
        <br /> <br /> v1.2 - Componentização .tsx implementada. <span className={styles.check}>✔✔</span>
        <br /> <br /> v1.3 - Router DOM & SPA implementado. <span className={styles.check}>✔✔</span>
        <br /> <br /> v1.4 - Repositório migrado para o Linux. <span className={styles.check}>✔✔</span>
        <br /> <br /> v1.5 - Lógica do GRID integrada ao Router DOM. <span className={styles.check}>✔✔</span>
        <br /> <br /> v1.6 - Responsividade otimizada para telas menores. <span className={styles.check}>✔✔</span>
        <br /> <br /> v1.7 - Componente 'Grade', Finalizada. <span className={styles.check}>✔✔</span> 
        <br /> <br /> v1.8 - Implementação de uso offline conlcuida. <span className={styles.check}>✔✔</span>
        <br /> <br /> v1.9  <span className={styles.corAviso}> . . . </span>  
      </h1> <br /> <br />
    </div>
  );
};