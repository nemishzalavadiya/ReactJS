let Initial_List = [
    {
        id: 0,
        name: "Nemish",
        phone: "9876543223"
    },
    {
        id:1,
        name: "Harshil",
        phone: "9823412345"
    }
]

const Subscriber = (state = Initial_List,action)=>{
    switch(action.type){
        case 'ADD':
            return action.subscriber;
        case 'SHOW':
            return state;
        case 'DELETE':
            let subReturn = state.filter(item=> item.id!==action.subscriberId);
            console.log("after deleting: ",subReturn)
            return subReturn;
        default:
            return state;
    }
}
export default Subscriber;