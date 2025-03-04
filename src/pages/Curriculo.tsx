import '../pages/DashBoard.css';
import curriculo from '../shared/components/CurriculoNew-1.png';


export const Curriculo = () => {
  return (
    <main className="lateral">
      <br />
      <div>
            <img src={curriculo} style={{width:'100%', height: '100%'}} alt="" />
      </div>
    </main>
  );
};