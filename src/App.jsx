import LyricApp from "./components/LyricApp"
import {LyricsProvider} from './context/LyricsProvider';


function App() {

  return (
    <LyricsProvider>
    <LyricApp></LyricApp>
    </LyricsProvider>

  )
}

export default App
