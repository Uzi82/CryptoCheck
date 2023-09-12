import useThemeHook from "../hooks/useThemeHook"

const Loading: React.FC = () => {
    useThemeHook()
    return(
        <>
            <div className="Flex">
                <div className="spinner"></div>
            </div>
        </>
    )
}

export default Loading