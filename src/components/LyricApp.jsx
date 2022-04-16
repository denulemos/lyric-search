import React from "react";
import Form from "./Form";
import useLyrics from "../hooks/useLyrics";
import Alert from "../components/Alert";
import Lyric from "../components/Lyric";

const LyricApp = () => {
  const { alert, lyric, loading } = useLyrics();
  return (
    <>
      <header>Lyric Search</header>

      <Form />
      <main>
        {alert ? (
          <Alert>{alert} </Alert>
        ) : lyric ? (
          <Lyric />
        ) :
        loading ? 'Loading' : 
        (
          <p className="text-center"> Search for your favourite Lyrics! </p>
        )}
      </main>
    </>
  );
};

export default LyricApp;
