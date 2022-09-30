import { useEffect } from "react";

export default PracticeTimer() {
    const [render, setRender] = useState(0);
    const time = useRef(0);
    
    useEffect(() => {
        const timer = setInterval(() => {
            time.current = time.current + 1;
            console.log(time.current);
        }, 1000);
        return(() => {
            clearInterval(timer);
            console.log("타이머 종료");
        })
}, []);

return(
    <>
        <h1>{time.current}</h1>
        <button onClick = {showTime}>시간</button>
    </>
)

    }