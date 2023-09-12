import { useState } from 'react'
import { useQuery } from 'react-query'
import { getListCoins } from '../queries/getListCoins'
import LazyList from './LazyList'

const List: React.FC = () => {
    const [page, setPage] = useState<number>(0)
    const {data, isLoading, isError} = useQuery(['coinsList', page], ()=>getListCoins(page), {
        refetchOnWindowFocus: false
    })
    if(isError) return <h1>Error</h1>
    if(isLoading) return (
        <>
            <div className="List">
                <LazyList />
                <div className="List__btns">
                    <button className="List__btns__btn" disabled={page===0?true:false} onClick={()=>setPage(page-1)}>Back</button>
                    <button className="List__btns__btn" disabled={page===20?true:false} onClick={()=>setPage(page+1)}>Next</button>
                </div>
            </div>
        </>)
    return(
        <>
            <div className="List">
                {
                    data && data?.length > 0 
                        ? data.map(el=>{
                            return(
                                <a href={el.websiteUrl} target='_blank' key={el.id} className='List__element'>
                                    <div className='List__element__name'>
                                        <img className='List__element__name-img' src={el.icon} />
                                        <h1 className='List__element__name-h1'>{el.name}</h1>
                                    </div>
                                    <div className="List__element__price">
                                        {el.price.toFixed(3)} &#8381;
                                    </div>
                                    <p className='List__element__changed'>Last hour: {el.priceChange1h>0 ? <>🔺</> : <>🔻</>} {Math.abs(el.priceChange1h)}</p>
                                    <p className='List__element__changed'>Last day: {el.priceChange1d>0 ? <>🔺</> : <>🔻</>} {Math.abs(el.priceChange1d)}</p>
                                    <p className='List__element__changed'>Last week: {el.priceChange1w>0 ? <>🔺</> : <>🔻</>} {Math.abs(el.priceChange1w)}</p>
                                </a>
                            )
                        })
                        : <>Something went wrong...</>
                }
                <div className="List__btns">
                    <button className="List__btns__btn" disabled={page===0?true:false} onClick={()=>setPage(page-1)}>Back</button>
                    <button className="List__btns__btn" disabled={page===20?true:false} onClick={()=>setPage(page+1)}>Next</button>
                </div>
            </div>
        </>
    )
}
export default List