export type CommonStateType = {
    fetchInfo: {
        errorMessageMap: {
            [actionType: string]: any,
        },
        fetchStatusMap: {
            [actionType: string]: any,
        },
        isSlowMap: {
            [actionType: string]: any,
        },
        nextPageMap: {
            [actionType: string]: any,
        },
        totalCountMap: {
            [actionType: string]: any,
        },
    }
}

export type StateType = {
    common: CommonStateType    
}