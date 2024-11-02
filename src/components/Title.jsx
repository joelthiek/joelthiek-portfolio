const Title = ({ des }) => {
    return (
      <div className="flex flex-col gap-4 font-titleFont mb-14">
        <h1 className="text-md md:text-3xl text-gray-300 font-bold capitalize">
          {des}
        </h1>
      </div>
    );
  };
  
  export default Title;
  