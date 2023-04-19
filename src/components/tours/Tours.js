import data from "../../data/db.json";
function Tours(){
    return(
        <>
        {data.map(val  => {
            return (
                <div key={val.id}>
                    <img src={val.image} alt={val.name} />
                    <h3>Name : {val.name}</h3>
                   <hr></hr>
                </div>
            );
        })}

    </>

);
}

export default Tours;