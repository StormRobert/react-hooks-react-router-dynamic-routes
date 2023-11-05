import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";


function MovieShow({movies}) {
    const params = useParams()

    return ( 
        <div>
           {/* And here we access the `movieId` stored in `params` to render 
        information about the selected movie */}
      <h3>{movies[params.movieId].title}</h3>
       
        </div>
     );
}

export default MovieShow;