export function Button(props){
    return (
        <div>
            <button onClick={props.event} className={props.style}>
                Clique aqui para ver meu nome
            </button>
        </div>
    )
}