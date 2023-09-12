import { Link } from "react-router-dom"
import useThemeHook from "../hooks/useThemeHook"

type props = {
    toMain: boolean
}

const Navigation: React.FC<props> = ({toMain}) => {
    const { switchTheme, theme } = useThemeHook()
    return(
        <>
            <div className="navigation">
                <h1 className="navigation__header">Crypto check</h1>
                <div className="navigation__settingsAndTheme">
                    <Link className="navigation__settingsAndTheme__profile" to={toMain ? '/' : 'settings'}>{toMain ? <>📰 Main</> : <>⚙️ Settings</>}</Link>
                    <label id="switch" className="switch">
                        <input type="checkbox" checked={theme === 'light' ? true : false} onChange={()=>switchTheme()} id="slider" />
                        <span className="slider round"></span>
                    </label>
                </div>
            </div>
        </>
    )
}
export default Navigation