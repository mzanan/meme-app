import React from 'react';

const MemeContainer = () => {

    const [equipo, setMemes] = React.useState([]);

    React.useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const data = await fetch('http://api.memegenerator.net//Generators_Select_ByPopular?pageIndex=0&pageSize=12&days=&apiKey=demo');
        const memes = await data.json();
        //console.log(memes.result);

        setMemes(memes.result);
    }

    return (
        <div>
            <h1>Memes</h1>
            <div className="card-columns">
                {
                    equipo.map(item => (
                        <div key={item.generatorID} className="card" style={{ width: "18rem" }}>
                            <img src={item.imageUrl} className="card-img-top" alt={item.displayName} />
                            <div className="card-body">
                                <h5 className="card-title">Name: {item.displayName}</h5>
                                <p className="card-text">Total Votes Score: {item.totalVotesScore}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default MemeContainer;