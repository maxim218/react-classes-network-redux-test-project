import ActorComponent from "./ActorComponent";

export default function ListOfActors(props) {
    return (
        <div>
            {props.records.map(element => <ActorComponent name={element.name} birth_year={element.birth_year} key={'key___' + element.name + '___' + element.birth_year} />)}
        </div>
    );
}