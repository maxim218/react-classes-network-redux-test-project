export default function ActorComponent(props) {
    return (
        <div style={{background: 'blue', color: 'white', padding: '6px', marginBottom: '8px'}}>
            Name: {props.name}
            <br/>
            Birthday: {props.birth_year}
        </div>
    );
}