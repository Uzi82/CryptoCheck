import { useQuery } from 'react-query'
import { getCoin } from "./queries/getCoin"
import { useAppSelector } from "./hooks/reduxHook"
import BigCoin from "./components/BigCoin"
import Navigation from "./components/Navigation"
import List from './components/List'
import Loading from './components/Loading'

const App: React.FC = () => {
  const bigCoins = useAppSelector(state => state.coins.baseCoins)
  console.log(bigCoins)
  const { data, isLoading, isError } = useQuery(['coin'], ()=>getCoin(bigCoins), {
    keepPreviousData: true,
    refetchOnWindowFocus: false
  })
  if(isLoading) return <Loading />
  if(isError) return <h1>Error</h1>
  if(data) return (
    <>
      <div className="Flex">
        <div className="container">
          <Navigation toMain={false} />
          <div className="elements">
            {
              data.map(el => {
                  return(
                    <BigCoin key={el.id} coin={el} />
                  )
                }
              )
            }
          </div>
          <List />
        </div>
      </div>
    </>
  )
}

export default App
