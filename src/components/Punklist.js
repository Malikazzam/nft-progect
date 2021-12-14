import React from 'react'
import { CollectionCard } from './CollectionCard'
import './Punklist.css'

const Punklist = ({ punklistData, setSelectedPunk }) => {
    return (
        <div className='punkList'>
            {punklistData.map(punk => (
                <div onClick={() => setSelectedPunk(punk.token_id)}>
                    <CollectionCard 
                    key={punk.token_id}
                    id={punk.token_id}
                    name={punk.name}
                    traits={punk.traits}
                    image={punk.image_original_url}
                    />
                </div>
            ))}
            
        </div>
    )
}

export default Punklist
