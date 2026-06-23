import React from 'react'

function Postcard(props) {
   const {title, description} = props;
    const [clicked, setClicked] = React.useState(false);

  return (
    <div className="bg-white p-6 rounded-lg shadow hover:border hover:border-black hover:bg-red-100   flex flex-col items-center">
        <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">{title}</h2>
      <p className="text-gray-600 text-center">
        <span className="font-medium">Description:</span>{description}
      </p>
      <button className={`${clicked ? "bg-special-red2 hover:bg-special-red" : "bg-gray-01 hover:bg-gray-02"} text-white p-2 inline-full rounded-md`} onClick={() => setClicked(true)} >
        {clicked ? "Tombol sudah diklik" : "Silakan Klik"}
       </button>
    </div>
  )
}

export default Postcard