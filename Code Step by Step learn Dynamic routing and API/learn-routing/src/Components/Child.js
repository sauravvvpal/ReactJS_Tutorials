import react,{useRef,useEffect} from 'react'

export default function Child(props) {
    const lastval=useRef();

    useEffect(()=>{
        lastval.current=props.count
    })

    const previousval=lastval.current

    return(
        <>
        <h1>Count is: {props.count}</h1>
        <h1>previous is: {previousval}</h1>
        </>
    )
}