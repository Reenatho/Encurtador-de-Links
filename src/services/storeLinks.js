

//Buscar os links encurtados
export async function getLinkSave(key){
    const myLinks = await localStorage.getItem(key)

    let linksSaves = JSON.parse(myLinks) || [];

    return linksSaves;
}


//salvar links no local storage

export async function saveLink(key, newLink){
    
    let linksStored = await getLinkSave(key);

    //se já tiver um link salvo com algum id nao duplicar
    const hasLink = linksStored.some(link => link.id === newLink.id)

    if(hasLink){
        console.log('Esse link já existe na sua lista')
        return;
    }

    //Adicionar novo link na lista
    linksStored.push(newLink)
    //Salvar no local storage
    await localStorage.setItem(key, JSON.stringify(linksStored))
    console.log('Link Salvo com sucesso!');
    

}


//deletar links ja salvo

export function deleteLink(links, id){
    let myLinks = links.filter(item => {
        return (item.id !== id)
    })

    localStorage.setItem('key', JSON.stringify(myLinks));
    console.log('link deletado com sucesso!')

    return myLinks;

}