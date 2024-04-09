import React, { useState } from 'react'

function AddCatForm({ addCat }) {
  const [name, setName] = useState('')
  const [weight, setWeight] = useState('')
  const [image, setImage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name || !weight || !image) return

    addCat({ name, weight, image })
    setName('')
    setWeight('')
    setImage('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type='text'
        placeholder='Weight'
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <input
        type='text'
        placeholder='Image URL'
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <button type='submit'>Add Cat</button>
    </form>
  )
}

export default AddCatForm
