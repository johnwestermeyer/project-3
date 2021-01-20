import React, { useEffect, useState } from "react";
import API from "../utils/API";
import { SearchResultsItem, SearchResultsList } from "../components/SearchResultsContainer";
import SearchInput from "../components/SearchInput";

function SearchResults() {
    const [searchResults, setSearchResults] = useState([]);
    const [codeSearch, setCodeSearch] = useState("");

    const handleInputChange = event => {
        const { value } = event.target;
        setCodeSearch(value);
    };

    const handleSearchSubmit = event => {
        event.preventDefault();
        API.getCodeSnippets(codeSearch)
        .then(res => setSearchResults(res.data))
        .catch(err => console.log(err));
    };

    return (
        <div>
            <h1>Search For Code Snippets</h1>
            <SearchInput />
            <SearchResultsList>
                <SearchResultsItem />

            </SearchResultsList>
        </div>
    )

}

export default SearchResults;
