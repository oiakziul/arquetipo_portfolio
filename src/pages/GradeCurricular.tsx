import styles from '../assets/styles/components/gradeCurricular.module.css';

// interface Props {
  
// }

export const GradeCurricular = () => {
  return (
    
    <div className={styles.container}>
      
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Disciplina</th>
            <th>Ano</th>
            <th>Situação</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>FUNDAMENTOS E ARQUITETURA DE COMPUTADORES</td>
            <td>2022</td>
            <td>Concluído</td>
            
          </tr>
          <tr>
            <td>ALGORITMOS E LÓGICA DE PROGRAMAÇÃO I</td>
            <td>2022</td>
            <td>Concluído</td>
          </tr>
          {/* Adicione mais linhas <tr> aqui para preencher a tabela */}
        </tbody>
      </table>
    </div>
  );
};