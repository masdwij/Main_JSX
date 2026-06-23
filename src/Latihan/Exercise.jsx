import React from "react"
import Postcard from "./Postcard";


function Exercise(props) {
    console.log(props);

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
          Postcard.
        </h1>
        <div className="grid md:grid-cols-5 lg:grid-cols-5 gap-6 max-w-5x3 mx-auto">
          <Postcard
           title="Walls of Babylon"
           description="The walls of Babylon were the city walls surrounding the ancient Mesopotamian city of Babylon, the political and religious centre of the Neo-Babylonian Empire. The walls of Babylon were included in many early versions of the Seven Wonders of the Ancient World."
          /> 
        </div>
      </div>
    </>
  );
}

export default Exercise