import "./MainMenu.css"
import menu_bg from "./assets/images/STT_BG00.png";
import menu_title_1 from "./assets/images/STT_LB00.png";
import menu_title_2 from "./assets/images/STT_LB10.png";
import menu_title_3 from "./assets/images/STT_LB20.png";
import menu_bgm from './assets/sounds/bgm/BGM30.wav';
import OptionBar from "./components/OptionBar.jsx";
import OptionButton from "./components/OptionButton.jsx";
import {useEffect, useRef} from "react";

export default function MainMenu() {
    const audioRef = useRef(null);

    useEffect(() => {
        const playAudio = async () => {
            try {
                if (audioRef.current) {
                    audioRef.current.volume = 0.2;
                    await audioRef.current.play();
                }
            } catch (err) {
                console.log("Autoplay was prevented:", err);
            }
        };

        playAudio().then();
        const handleFirstInteraction = () => {
            playAudio().then();
            document.removeEventListener('click', handleFirstInteraction);
        };

        document.addEventListener('click', handleFirstInteraction);

        return () => {
            document.removeEventListener('click', handleFirstInteraction);
        };
    }, []);

    const openUrl = function(url) {
        return () => window.open(url, "_blank");
    }

    return (
        <>
            <div className={"menu-wrapper"}>
                <div className={"menu"}>
                    <div className={"fade-overlay"}></div>
                    <audio src={`${menu_bgm}`} ref={audioRef} autoPlay loop preload={"auto"}/>
                    <img className={"menu-bg"} src={`${menu_bg}`} alt={"STT_BG00"}/>
                    <div className={"menu-title"}>
                        <img src={`${menu_title_1}`} alt={"STT_LB00"}/>
                        <img src={`${menu_title_2}`} alt={"STT_LB10"}/>
                        <img src={`${menu_title_3}`} alt={"STT_LB20"}/>
                    </div>
                    <div className={"menu-options"}>
                        <OptionBar>
                            <OptionButton onClick={openUrl("https://store.steampowered.com/app/324160/CLANNAD")}>NEW GAME</OptionButton>
                            <OptionButton onClick={openUrl("https://blog.clannad.love")}>BLOG</OptionButton>
                            <OptionButton onClick={openUrl("https://osu.ppy.sh/users/17975283")}>OSU</OptionButton>
                            <OptionButton onClick={openUrl("https://steamcommunity.com/id/neverfc")}>STEAM</OptionButton>
                            <OptionButton onClick={openUrl("https://vrchat.com/home/user/Sorihiko")}>VRCHAT</OptionButton>
                        </OptionBar>
                    </div>
                </div>
            </div>
        </>
    )
}