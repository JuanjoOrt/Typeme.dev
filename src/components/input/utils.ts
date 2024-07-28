
export const getTheLength = (text: string) => {
    const element = document.createElement("span"); 
        document.body.appendChild(element); 
     
        element.style.height = 'auto'; 
        element.style.width = 'auto'; 
        element.style.fontSize = '30px'; 
        element.style.position = 'absolute'; 
        element.style.whiteSpace = 'no-wrap'; 
        element.innerHTML = text; 
     
        const width = Math.ceil(element.clientWidth); 
        const formattedWidth = width + "px"; 
     
        document.body.removeChild(element); 
        return formattedWidth
}
