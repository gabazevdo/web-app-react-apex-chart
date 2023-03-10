import Chart from '../components/chart/Chart'
import Header from '../components/header'
import { ContainerHome } from './style'

export default function Home() {
  return (
    <>
      <ContainerHome>
        <Header />
        <Chart />
      </ContainerHome>
    </>
  )
}
