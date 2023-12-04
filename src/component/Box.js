

function Box({value,win,boxClickHandler}){
    return(
        <div>
            {win ?
            (<div onClick={boxClickHandler} 
                className={ `back1 ${value === 'X' ? "X-content" : "O-content"} flex justify-center h-[83px] items-center  text-3xl font-semibold` }>
                {value}
            </div>) 
            : 
            (<div onClick={boxClickHandler} 
                className={ ` ${value === 'X' ? "X-content" : "O-content"} flex justify-center h-[83px] items-center  text-3xl font-semibold` }>
                {value}
            </div>)}
        </div>
    );
}

export default Box;