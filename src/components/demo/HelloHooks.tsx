import React, {useEffect,useState} from 'react'

import { Button} from 'antd';

import {render} from 'react-dom';


interface Greeting {
    name: string
    firstName: string
    lastName: string

}

const HelloHooks = (props: Greeting) => {
    const [count,setCount] = useState(0)
    const [text,setText] = useState<String | null>(null)
    useEffect(() => {
        if (count > 5) {
            setText('休息一下')
        }
    },[count])
    return (
        <>
            <p>你点击了 {count}次</p>
            <Button onClick={()=>{setCount(count + 1)}}>Hello {props.name} </Button>
        </>
    )
}

HelloHooks.defaultProps = {
    firstName: " ",
    lastName: " "
}

export default HelloHooks;


