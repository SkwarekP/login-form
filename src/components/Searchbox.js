function SearchBox(props) {
    return (
        <div className="wrapper_searchbox">
            <input type="text" placeholder="@Email..." style={{color: "white"}}
                   onChange={(e) => props.onReceive(e.target.value)}/>
            <span className="underline"/>
        </div>
    );
}

export default SearchBox;