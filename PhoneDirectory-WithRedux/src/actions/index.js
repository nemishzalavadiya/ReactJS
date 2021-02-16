export const add = (subscriber)=>{
    return {
        type: 'ADD',
        subscriber: subscriber
    };
};
export const remove = (subscriberId)=>{
    return {
        type: 'DELETE',
        subscriberId: subscriberId
    };
};
export const show = ()=>{
    return {
        type: 'SHOW',
    };
};