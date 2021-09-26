const URL = "http://localhost:3000/transits"

export const getTransits = (transits) => ({type: "LOAD_TRANSITS", payload: transits})

export const fetchTransits = () => {
    return (dispatch) => {
        fetch(URL)
         .then(resp => resp.json())
         .then(transits => {
             dispatch(getTransits(transits))
         })
    }
}

export const createTransit = (transit) => {
    return (dispatch) => {
        const configObj = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify(transit)
        }
        
        fetch(URL, configObj)
         .then(resp => resp.json())
         .then(transit => {
             dispatch({type: 'ADD_TRANSIT', payload: transit})
         })
    }
}