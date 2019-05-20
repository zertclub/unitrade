


const pricereducer=(state={},action)=>{


    switch(action.type){
        case 'UPDATE_RATE':
        console.log("RATE UPDATED",action.transaction);
        return state;
        case 'UPDATE_ERROR':
        console.log('error',action.err);
        case 'UPDATE_STATUS':
        console.log("status updated");
        default:
        return state;
    }
    }; 
    
    
    export default pricereducer