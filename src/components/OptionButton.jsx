import "./OptionButton.css"
import hoverSound from "../assets/sounds/msic/S00.wav";

const cachedAudio = new Audio(`${hoverSound}`);
cachedAudio.volume = 0.5;

export default function OptionButton({children, onClick}) {
    const playHoverSound = () => {
        cachedAudio.currentTime = 0;
        cachedAudio.play().catch(error => {
            console.log("HoverSound 播放失败喵:", error);
        });
    };

    return (
        <>
            <div className={"option-button-wrapper"}>
                <span
                    className={"option-button"}
                    onMouseEnter={playHoverSound}
                    onClick={onClick}
                >{children}</span>
            </div>
        </>
    )
}