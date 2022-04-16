import React, {useState} from 'react'
import useLyrics from '../hooks/useLyrics';


const Form = () => {

    const {setAlert, searchLyric} = useLyrics();

    const [search, setSearch] = useState({
        artist: '',
        song: ''
    });

    const handleSubmit = e => {
        e.preventDefault();
        if (Object.values(search).includes('')) {
            setAlert('All fields must be filled')
            return;
        }

        searchLyric(search)
        setAlert('');
    }

  return (
      <form onSubmit={handleSubmit}>
          <legend>Search Artists and Song</legend>

          <div className="form-grid">
              <div>
                <label>Artist</label>
                <input
                onChange={e => setSearch({
                    ...search,
                    [e.target.name] : e.target.value
                })}
                value={search.artist} 
                type="text" 
                name="artist" 
                placeholder='Search by Artist'/>
              </div>
              <div>
                <label>Song</label>
                <input
                 onChange={e => setSearch({
                    ...search,
                    [e.target.name] : e.target.value
                })}
                value={search.song} 
                type="text" 
                name="song" 
                placeholder='Search by Song'/>
              </div>

              <input type="submit" value="Search"/>
          </div>
      </form>
  )
}

export default Form