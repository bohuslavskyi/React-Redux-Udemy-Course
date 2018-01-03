import React from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar'


// YouTube API_KEY
const API_KEY = 'AIzaSyDFSqRooQ5NPJYdVoKGgaoG8WegEdBAkj4';



//Create a new component. this component should produce some HTML
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    )
}

//Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
