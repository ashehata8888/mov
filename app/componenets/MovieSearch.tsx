'use clint'

import {useState} from 'react';
import searchMovies from '../services/movie.service';
import MovieCard from './MovieCard';
import SearchBar from './SearchBar';


export const MovieSearch = () =>{
    const [movies,setMovies]= useState([])

    const handleSearch = async(query:string)=>{
        const result = await searchMovies(query)
        setMovies(result)

        console.log('result',result)

    }



    return (<div>
        <SearchBar onSearch={handleSearch}/>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols3 lg:grid-cols-4 gap-8 mt-8'>
          {movies.map((mov : any)=>(
            <MovieCard   key={mov.id} title={mov.original_title} overview={mov.overview} posterPath={mov.poster_path} />
          )
          )}
        </div>
    </div>)
}