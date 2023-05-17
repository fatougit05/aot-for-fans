import React, { useEffect } from 'react'
import EpisodeSucess from './episodes'
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useSession } from 'next-auth/react';
import EpisodesItems from './episodes/EpisodeItems';


 function episodes() {

return (
    <div>
      <div className='flex flex-col items-center justify-center h-72 aot-banner w-[100%]'>
    <p className='text-xs text-white'>Watch the latest season 4 part 2 and hints for the part 3!</p>
</div>


  <EpisodesItems />

    
    </div>
  )
}

export default episodes

