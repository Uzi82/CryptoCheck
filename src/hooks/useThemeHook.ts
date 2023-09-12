import { useAppDispatch, useAppSelector } from "./reduxHook"
import { setTheme } from "../store/themeSlice"

const useThemeHook = () => {
    const theme = useAppSelector(state=>state.theme.val)
    const dispatch = useAppDispatch()
    document.documentElement.setAttribute('data-theme', theme)
    function switchTheme() {
        dispatch(setTheme())
        document.documentElement.setAttribute('data-theme', theme)
    }
    return {switchTheme, theme}
}

export default useThemeHook