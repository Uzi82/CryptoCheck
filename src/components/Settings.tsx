import axios from "axios"
import { coin } from "../queries/getCoin"
import Navigation from "./Navigation"
import { useAppDispatch, useAppSelector } from "../hooks/reduxHook"
import { changeCoin } from "../store/baseCoinsSlice"
import { useState } from 'react'


const Settings: React.FC = () => {
    const coins = useAppSelector(state=>state.coins.baseCoins)
    const dispatch = useAppDispatch()
    const [id1, setId1] = useState<string>('')
    const [id2, setId2] = useState<string>('')
    const [id3, setId3] = useState<string>('')
    async function changeHandle(index: number, id: string) {
        console.log(`https://api.coinstats.app/public/v1/coins/${id}?currency=RUB`)
        try {
            const { data: { coin } }: { data: { coin: coin } } = await axios.get(`https://api.coinstats.app/public/v1/coins/${id}?currency=RUB`) 
            console.log(coin)
            if(coin && coins.indexOf(coin.id) === -1) dispatch(changeCoin({index, id}))
            else throw new Error()
        }
        catch(e) {
            alert(e)
        }
    } 
    return(
        <>
            <div className="Flex">
                <div className="container">
                    <Navigation toMain />
                    <div className="Change">
                        <div className="Change__el">
                            <h1 className="Change__el__header">First coin:</h1>
                            <div className="Change__el__form">
                                <input className="Change__el__form__input" value={id1} onChange={(e)=>setId1(e.target.value)} placeholder="example: bitcoin" />
                                <button className="Change__el__form__btn" onClick={()=>changeHandle(0, id1)}>Set</button>
                            </div>
                        </div>
                        <div className="Change__el">
                            <h1 className="Change__el__header">Second coin:</h1>
                            <div className="Change__el__form">
                                <input className="Change__el__form__input" value={id2} onChange={(e)=>setId2(e.target.value)} placeholder="example: ethereum" />
                                <button className="Change__el__form__btn">Set</button>
                            </div>
                        </div>
                        <div className="Change__el">
                            <h1 className="Change__el__header">Third coin:</h1>
                            <div className="Change__el__form">
                                <input className="Change__el__form__input" value={id3} onChange={(e)=>setId3(e.target.value)} placeholder="example: tether" />
                                <button className="Change__el__form__btn">Set</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Settings