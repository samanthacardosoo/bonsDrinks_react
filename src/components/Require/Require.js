import React from 'react';


class Require extends React.Component {
    async componentDidMount() {
    const url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail"
    const data = await fetch (url);
    return data.json();
    }
}

export default Require