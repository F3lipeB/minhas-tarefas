import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="Buscar" />
      <S.Filtros>
        <FiltroCard legenda="pendentes" contador={1} ativo />
        <FiltroCard legenda="concluídas" contador={2} ativo />
        <FiltroCard legenda="urgentes" contador={3} ativo />
        <FiltroCard legenda="importantes" contador={4} ativo />
        <FiltroCard legenda="normal" contador={5} ativo />
        <FiltroCard legenda="todas" contador={10} ativo />
      </S.Filtros>
    </div>
  </S.Aside>
)

export default BarraLateral
