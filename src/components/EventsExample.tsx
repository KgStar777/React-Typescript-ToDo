import React, {FC, useRef, useState} from 'react';


// типизация событий

const EventsExample: FC = () => {
    const [value, setValue] = useState<string>('')
    const [isDrag, setIsDrag] = useState<boolean>(false)
    const inputRef = useRef<HTMLInputElement>(null)


    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const clickHandler = (e:React.MouseEvent<HTMLButtonElement>) => {
        console.log(value)
    }
    const clickHandler2 = (e:React.MouseEvent<HTMLButtonElement>) => {
        console.log(inputRef.current?.value)
    }

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log('DRAG')
    }

    const dropHandler = (e :React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(true)
        console.log('DROP')
    }

    const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
        console.log('you are outside the target')
    }

    const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(true)
        console.log('you are inside the target')
    }

    return (
        <div>
            <input value={value} onChange={changeHandler}
                   type="text" placeholder="Управляемый"/>
            <button onClick={clickHandler}>Push</button>
            <input ref={inputRef} type="text" placeholder="Неуправляемый"/>
            <button onClick={clickHandler2}>Push</button>
            <div style={{display: 'flex', gap: '1rem', marginTop: '1rem'}}>
                <div onDrag={dragHandler}
                     draggable
                     style={{
                         width: '200px',
                         height: '200px',
                         background: 'lightblue',
                         textAlign: 'center'
                     }}>d r a g</div>
                &
                <div onDrop={dropHandler}
                     onDragLeave={leaveHandler}
                     onDragOver={dragWithPreventHandler} //Атрибут событий ondragover позволяет задать срабатывание скрипта, когда элемент перемещают над допустимой зоной для переноса.
                     style={{
                         width: '200px',
                         height: '200px',
                         background: isDrag ? 'lightblue' : 'lightgrey',
                         textAlign: 'center'
                     }}>d r o p</div>
            </div>
        </div>
    );
};

export default EventsExample;