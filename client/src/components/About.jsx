import React, { useContext, useEffect } from 'react'
import NoteContext from '../context/notes/noteContext'

export default function About() {

  const a = useContext(NoteContext)

  useEffect(() => {
    a.update();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
        This is About {a.state.name} of age {a.state.age} years old
    </div>
  )
}
