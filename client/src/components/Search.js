// import {useState } from 'react';
import Slider from './Slider';
import Sidebar from './Sidebar';
import Articles from './Articles';
import { useParams } from 'react-router-dom';

const Search = () => {

  const params = useParams();

    const searched = params.search;

    return (

      <div id="search">

        <Slider
          title={'Search: ' + searched}
          size="slider-small"
        />
        <div className="center">

          <div id="content">
            <Articles search={searched} />
          </div>

          <Sidebar blog />

        </div>
      </div>
    );
  }

export default Search;
