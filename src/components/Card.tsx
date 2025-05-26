type Props = {
    title: string,
    desc: string
};

import { useEffect, useState } from "react";

const Card = ({ title, desc} : Props) => {

    
    const [hasGraduated, setHasGraduated] = useState<Boolean>(false);

    useEffect(() => {
        console.log(title + ' graduated ' + hasGraduated)
    }, [hasGraduated])
    
    return (
        <div>
            <h2>{title}</h2>
            <div>{desc}</div>
            <div>
                {hasGraduated ? 'Graduated' : 'Did not graudate'}
            </div>
            <button onClick={() => setHasGraduated((prevState) => !prevState) }>Graduate</button>
        </div>
    )
}

export default Card