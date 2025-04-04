import "./OptionBar.css"
import option_bar_bg_1 from "../assets/images/STT_MB00.png";
import option_bar_bg_2 from "../assets/images/STT_MB10.png";
import option_bar_bg_3 from "../assets/images/STT_MB20.png";

export default function OptionBar({children}) {
    return (
        <>
            <div className={"option-bar-wrapper"}>
                <div className={"option-bar-bg"}>
                    <img src={`${option_bar_bg_1}`} alt={"STT_LB00"}/>
                    <img src={`${option_bar_bg_2}`} alt={"STT_LB10"}/>
                    <img src={`${option_bar_bg_3}`} alt={"STT_LB20"}/>
                </div>
                <div className={"option-bar-content"}>
                    {children}
                </div>
            </div>
        </>
    )
}