import { XMarkIcon } from '@heroicons/react/24/outline'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import React,{useEffect, useState} from 'react'
import CharactersData from "../characters.json"
import Skeleton from './components/Skeleton'


export default function Characters({characterName}) {
  const [characters,setCharacters] = useState([])
const [filters ,setFilter] = useState("")
  async function getCharacters () {
    setCharacters(CharactersData)
  }

  useEffect(() => {
    getCharacters()
  }, [])

  return (
    <div className='h-[7900px]'>


  <select id="filter-items" defaultValue="" onChange={(e) => setFilter(e.target.value)} className='px-2 mt-10 ml-20 text-gray-200 bg-gray-500 rounded outlirounded-lg'>
          <option  value="">All characters</option>
          <option  value="ErenYeager">Eren</option>
          <option  value="ArminArlert">Armin</option>
          <option  value="MikasaAckerman">Mikasa</option>
          <option  value="LeviAckerman">Levi</option>
          <option  value="JeanKirstein">Jean</option>
          <option  value="SashaBraus">Sasha</option>
          <option  value="ReinerBraun">Reiner</option>
          <option  value="HistoriaReiss">Historia</option>
          <option  value="Ymir">Ymir</option>
          <option  value="AnnieLeonhart">Annie</option>
          <option  value="ZekeYeager">Zeke</option>
          <option  value="GabbyBraun">Gabby</option>
          <option  value="BertholtHoover">Bertholt</option>
        </select>

        {characters.length > 0?    characters.filter((character) => {
  if(filters==="") {
    return character
  }

  else if(filters.replaceAll(" ","") === character.characterName.replaceAll(" ","")) {
    return character
  }
}
)
.map((character, index) => (
  <>

        
<div className='pt-20 responsive-info'key={index}>
<img src={character.aboutImage}
 className='w-[60%] rounded' alt="" />
<div className='flex flex-col items-center justify-center ml-16'>
<h1 className='text-2xl font-bold text-center text-white underline '>{character.characterName}</h1>
<p className='text-xs text-center text-white w-[95%] pt-4'>{character.characterDescription}</p>
{ (character.titanNature !== "") ?
(<p className='pt-4 text-sm text-red-800 underline'>{character.titanNature}</p>) : ""}

<button className='h-8 mt-4 text-xs text-white bg-gray-700 rounded outline-none w-36 rounded-r-2'>episodes related : {character.episodeRelated}</button>


</div>
</div>

</>
)): 
(
<div className='mt-10 responsive-skeleton'>
<Skeleton width="400px" height="300px" borderRadius={5}  backgroundColor="#3f3f3f"/>

  <div className='flex flex-col items-center justify-center'>
<Skeleton width="260px" height="30px"  backgroundColor="#3f3f3f" marginTop="15px" marginLeft="30px"   />
<Skeleton width="420px"  height="100px"  backgroundColor="#3f3f3f" marginTop="18px" marginLeft="30px" />
<Skeleton width="300px"  height="20px"  backgroundColor="#3f3f3f" marginTop="18px" marginLeft="30px" />

</div>
</div>
)
}




    </div>
  )
}

