import { useState } from "react";

export default function TechnoAdd(props) {

    const [techno, setTechnos] = useState({
        technoname: '',
        technocategory:'',
        technodescription:''
    });
    const {handleAddTechno} = props;
    // const techno = {
    //     name: 'React',
    //     category:'front',
    //     description:'Learn React'
    // };

    function handleSubmit(evt){
        evt.preventDefault();
        handleAddTechno(techno);
        setTechnos({
            technoname: '',
            technocategory:'',
            technodescription:''
        })
    }
    function handleChange(evt) {
        const { name, value } = evt.target;
        setTechnos({...techno, [name] : value});
    }

    return (
        <div className="techno-add">

            <h1>Add a Techno</h1>

            <form onSubmit={(evt) => handleSubmit(evt) }>
                <label htmlFor="technoname">Name:</label>
                <br />
                <input type="text" name="technoname" id="technoname" value={techno.technoname} onChange={(evt) => handleChange(evt)}/>
                <br />
                <label htmlFor="tachnocategory">Category:</label>
                <br />
                <select name="technocategory" id="tachnocategory" value={techno.technocategory} onChange={(evt) => handleChange(evt)}>
                    <option value=""> select a category</option>
                    <option value="front">Front</option>
                    <option value="back">Back</option>
                    <option value="fullstack">Full Stack</option>
                    <option value="other">Other</option>
                </select>
                <br />

                <label htmlFor="technodescription">Description:</label>
                <br />
                <textarea 
                name="technodescription" 
                id="technodescription" 
                cols="30" 
                rows="10"
                value={techno.technodescription} 
                onChange={(evt) => handleChange(evt)}
                ></textarea>
                <br />
                <input type="submit" value="Add Techno" className="btn" />
            </form>

        </div>

    );
}