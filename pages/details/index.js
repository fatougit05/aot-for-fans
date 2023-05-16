import React from 'react'
import EpisodeDetails from './[episodeId]'
import episodes from "../../episode.json"
export default function index() {
 
  return (
   <div>

    <EpisodeDetails />
  
   </div>

    
  )
}
{/*   {episodes.map((post) => (
    <>
{post.episodeCollection.map((ep) => (
    <EpisodeDetails episodeId={ep.episodeId}/>
    ))}
    </>
  ))}*/}
