import styles from '../assets/styles/components/projetosFaculdade.module.css'

export const ProjetosFaculdade = () => {
  return (
    <div className={styles.dashboardContainer}>
      <p className='aviso'> Experimente mudar a orientação da tela.</p>
      <br />
      <main className={styles.dashboardGrid}>
        {/* Elementos */}
        <div className={styles.gridItem} id={styles.dmuActivation} >
          Diagrama de atividades <br /> <br />
          <span style={{ fontSize: '0.7em', color: '#666' }}>
          Clicar no card exibirá o projeto ampliado em PDF. 
          </span>
        </div>
        <div className={styles.gridItem}>Bravo</div>
        <div className={styles.gridItem}>Charlie</div>
        <div className={styles.gridItem}>Delta</div>
        <div className={styles.gridItem}>Echo</div>
        <div className={styles.gridItem}>Foxtrot</div>
        <div className={styles.gridItem}>Golf</div>
        <div className={styles.gridItem}>Hotel</div>
        <div className={styles.gridItem}>Juliett</div>
        <div className={styles.gridItem}>India</div>
      </main>
    </div>
  )
}