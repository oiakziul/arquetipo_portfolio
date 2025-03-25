import styles from '../assets/styles/components/gradeCurricular.module.css';

// interface Props {
  
// }

export const GradeCurricular = () => {
  return (
    
    <div className={styles.container}>
        <p>Styles componetes implmenteado, proximo passo refazer a responsividade.</p>
     
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Telefone</th>
            <th>CPF</th>
            <th>Data de Nascimento</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>a</td>
            <td>s</td>
            <td>d</td>
            <td>f</td>
            <td>g</td>
            <td>h</td>
          </tr>
          <tr>
            <td>a</td>
            <td>s</td>
            <td>d</td>
            <td>f</td>
            <td>g</td>
            <td>h</td>
          </tr>
          {/* Adicione mais linhas <tr> aqui para preencher a tabela */}
        </tbody>
      </table>
    </div>
  );
};