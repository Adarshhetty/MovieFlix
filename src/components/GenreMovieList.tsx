import GenreList from "../constant/GenreList";
import Movie from "./Movie";

const GenreMovieList = () => {
  return (
    <div>
      {GenreList.genere.map(
        (item, index) =>
          index <= 5 && (
            <div className=" p-8 px-8 md:px-16">
              <h2 className="text-[20px] text-white font-bold">{item.name}</h2>
              <Movie genreId={item.id} />
            </div>
          )
      )}
    </div>
  );
};

export default GenreMovieList;
