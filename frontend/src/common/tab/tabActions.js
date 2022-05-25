//Colocamos as Actions Creators


export function selectTab(tabId){
    //console.log(tabId)
    return{
        type: 'TAB_SELECTED',
        payload: tabId
    }
}

//Controla a visualização das tabs. Usa SPREAD para cada tab.
export function showTabs(...tabIds){
    //Objeto que representa todas as tabs exibidas
    const tabsToShow = {}

    tabIds.forEach(e => tabsToShow[e] = true)
    
    //Action Creator
    return {
        type: 'TAB_SHOWED',
        payload: tabsToShow
    }

    //Depois manda pro Estado da aplicação (tabReducer.jsx).
}