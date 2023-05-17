import { BookmarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Episodes from "../../episode.json"
import React, { useEffect , useRef, useState } from 'react'
import Skeleton from '../components/Skeleton';
import index from '../details';

function EpisodesItems() {
const [filters,setFilter] = useState("")
  const [criteria, setCriteria] = useState([])
  const [searchs, setSearch] = useState("")
  function getNameList () {
      setCriteria(Episodes)
      console.log(Episodes)
  }
  
  useEffect(() => {
      getNameList()
  },[])

  const ref = useRef()
      {/**   if(typeof window !== "undefined") {
        document.querySelector(".icon")
      */}
      if(typeof window !== "undefined") {
    const icon =document.querySelector(".icon")
    const search =   document.querySelector('.search')
    icon.onclick = function() {
      
        search.classList.toggle('active')
        }

      }
   
    
      
  return (
    <div className='h-[3000px]'>
      <div  className='responsive-flexbox '>
 <div className='mt-10 bg-gray-700 search'>
<div className='icon '></div>
<div className='input'>
    <input onChange={(e) => setSearch(e.target.value)}
     type="text" placeholder="ex:armin,episode 1, 32(min)" id="mysearch" className='bg-gray-700 '/>
</div>
 </div>
 
<select id="filter-items" defaultValue="" onChange={(e) => setFilter(e.target.value)} className='px-2 mt-10 ml-20 text-gray-200 bg-gray-500 rounded outlirounded-lg'>
          <option  value="">All seasons</option>
          <option  value="1">season 1</option>
          <option  value="2">season 2</option>
          <option  value="3">season 3</option>
          <option  value="4">season 4</option>
          </select>
 </div>

        <div className='flex flex-col items-center justify-center'>
      
        {criteria.length >0 ? criteria.filter((post,index) => {
          if(filters==="") {
            return post.episodeCollection[index]
          }

          else if (parseInt(filters)=== post.season) {
            return post.episodeCollection[index]

          }
        })
        
        .map((post) => (
          <div key={post?.id}>
         
 { searchs === "" ?  <h1 className='pt-6 text-2xl font-bold text-center text-white'>SEASON {post?.season}</h1> :"" }
          <div
            className="responsive-grid items-center mx-auto ml-4 outline-none w-[80%]  mt-2"
          >
           
              {post?.episodeCollection.filter((ep) => {
                if(searchs=== "") {
                  return ep;
                }

                else if(ep?.relatedTo.toLowerCase().includes(searchs.toLowerCase()) ){
                  return ep;
                }

                else if(parseInt(searchs) === ep.duration) {
                  return ep
                }

                else if(ep?.title.toLowerCase().replaceAll(" ","").includes(searchs.toLowerCase().replaceAll(" ",""))){
                  return ep;
                }
               
             
                
              })
              .map(ep => (
                 <div className="flex flex-col justify-center" key={ep?.episodeId}>
                <Link href={`details/${ep?.episodeId}`}>
                <img
                className="w-[76%]  rounded"
                src={ep?.episodeImage} 
                alt=""
                
              />
              </Link>
                

              <p className='pt-4 pb-4 text-xs text-left text-white'>{ep?.title} season {ep?.season} {""} <span className='text-red-600'>{" "}•Subtitled</span> 
              <span className='pl-4 text-xs font-thin text-white'>{ep?.duration} min.</span> <span><BookmarkIcon className='inline w-5 h-5 ml-4 text-red-700'/></span>
              </p>
              </div>
                ))}
                
          </div>
     
      
      </div>
        )) : (
         <div className='responsive-grid ' >
          {new Array(12).fill(0).map((_,e) => (
          <div key={e?.id}>
             <Skeleton backgroundColor="#3f3f3f" borderRadius={10} width="300px" height="200px" marginTop="15px" marginLeft="15px"/>
             </div>
          ))}
              </div>
        )}

      </div>
     
    </div>
  )
}


export default EpisodesItems