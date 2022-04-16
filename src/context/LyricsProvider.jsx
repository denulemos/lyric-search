import React, {createContext, useState} from 'react'
import axios from 'axios';

const LyricsContext = createContext();

const LyricsProvider = ({children}) => {

    const [alert, setAlert] = useState('');
    const [lyric, setLyric] = useState('');
    const [loading, setLoading] = useState(false);

    const searchLyric = async(search) => {
        setLoading(true);
        try {
            const url = `https://api.lyrics.ovh/v1/${search.artist}/${search.song}`;
            const {data} = await axios(url) // get is default
            setLyric(data.lyrics);
            setAlert('');
        }
        catch (e) {
            setAlert('Lyric not Found');
        }
        finally {
            setLoading(false);
        }
    }

    return (
        <LyricsContext.Provider
        value={{alert, setAlert, searchLyric, lyric, loading}}>
            {children}
        </LyricsContext.Provider>
    )
}

export { LyricsProvider}

export default LyricsContext;