/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

function Search({ setSearchQuery }) {
  return (
    <div className="relative max-w-80 ">
      <input
        className="border p-2 w-full max-w-80 rounded-lg focus:outline-1 outline-(--Brand-Green) pr-10 "
        type="text"
        placeholder="Search here"
        onChange={e => setSearchQuery(e.target.value)}
      />
      <span className="material-icons-outlined absolute right-1.5 top-2.5 text-(--Neutral-Black-900)">
        search
      </span>
    </div>
  );
}

export default Search;
