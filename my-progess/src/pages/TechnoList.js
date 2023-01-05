import TechniItem from "../components/technoItem";

export function TechnoList(props){

    const { technos } = props;

    return(
        <div className="techno-list">
            <h1> All Technos</h1>
            <div>

        {
                technos.map(techno => (
                   <TechniItem techno={techno} key={techno.technoid} />
                ))
        }

            </div>
        </div>
    )
}