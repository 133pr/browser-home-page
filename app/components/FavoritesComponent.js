
const FavoritesComponent = () => {
    return (
        <div className="bg-slate-900 py-10 px-5 rounded-3xl shadow-lg mt-5 h-[60%] grid grid-cols-2 lg:grid-cols-6 gap-5">
            {
                Array.apply(0, Array(12)).map((item, i) =>{
                    return (
                        <div key={i}>
                            <FavItem/>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default FavoritesComponent;

const FavItem = () => {
    return (
        <div className="aspect-square bg-slate-800 rounded-3xl hover:shadow-lg hover:shadow-cyan-500/50">

        </div>
    );
};