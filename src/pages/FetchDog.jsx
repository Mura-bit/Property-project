import React, { useEffect, useState } from "react";

const FetchDog = () => {
    const [dogImage, setDogImage] = useState("");
    const [bigDogs, setBigDogs] = useState([]);
    const [smallDogs, setSmallDogs] = useState([]);

    //https://dog.ceo/api/breeds/image/random
    
    const getRandomDogImage = async () => {
      try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await response.json();
        setDogImage(data.message);
      } catch (err) {
        console.log("error", err);
      }
    };
  

  useEffect(() => {
    getRandomDogImage();
  }, []);
    
    const getDogsImage = () => {
        getRandomDogImage();
    }

  const getBigDogImage = () => {
    setBigDogs([...bigDogs, dogImage]);
    getRandomDogImage();
  };

    const getSamllDogImage = () => {
      setSmallDogs([...smallDogs, dogImage])
    getRandomDogImage();
  };

  return (
    <div>
      <h1 className=" text-4xl text-center mt-2 mb-6">Dog list</h1>
      <div className="flex justify-center">
        <img
          className="flex justify-center w-72 h-72 rounded-xl"
          src={dogImage}
          alt="#"
        />
      </div>
      <div className="flex justify-evenly mt-4 mb-4">
        <button
          className="text-3xl bg-neutral-700 text-neutral-300 rounded-md w-40 h-16 hover:bg-white hover:text-neutral-700"
          onClick={getBigDogImage}
        >
          Big Dogs
        </button>
        <button
          className="text-3xl bg-neutral-700 text-neutral-300 rounded-md w-40 h-16 hover:bg-white hover:text-neutral-700"
          onClick={getDogsImage}
        >
          Get Dogs
        </button>
        <button
          className="text-3xl bg-neutral-700 text-neutral-300 rounded-md w-40 h-16 hover:bg-white hover:text-neutral-700"
          onClick={getSamllDogImage}
        >
          Small Dogs
        </button>
      </div>
      <div className="flex justify-evenly">
        <div className="flex flex-col w-2/4 h-2/4 m-5">
          <h1 className=" text-3xl text-slate-900 text-center">Big Dogs</h1>
          <div className="flex flex-wrap">
            {bigDogs.length !== 10 &&
              bigDogs.map((el, index) => {
                return (
                  <img
                    className="w-60 h-60 m-2 rounded-xl"
                    key={index}
                    src={el}
                    alt="#"
                  />
                );
              })}
          </div>
        </div>
        <div className="flex flex-col w-2/4 h-2/4">
          <h1 className=" text-3xl text-slate-900 text-center">Small Dogs</h1>
          <div className="flex flex-wrap ">
            {smallDogs.length !== 10 &&
              smallDogs.map((el, index) => {
                return (
                  <img
                    className="w-60 h-60 m-2 rounded-xl"
                    key={index}
                    src={el}
                    alt="#"
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FetchDog;
