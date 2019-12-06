//put your head here
let head = '<HTML><Head></Head>';

function separate() {
    let firstDiv = document.getElementsByClassName('_4t5n');
    let firstMonth = 'Mar';
    let filename = "Mar.txt";
    let outputText = "";
    console.log(firstDiv[0]);
    for (let i = 1, l = firstDiv[0].children.length; i < l; i++) {
        let child = firstDiv[0].children[i];
        if (child.children[2].innerText.substring(0,3) != firstMonth) {
            console.log(firstMonth);
            let innerTextChild = child.children[2].innerText;
            firstMonth = innerTextChild.substring(0,3);
            filename = innerTextChild.substring(
                innerTextChild.indexOf(",") + 2, 
                innerTextChild.lastIndexOf(",")  
            ) + innerTextChild.substring(0,3);
            
            download(filename, head + outputText);
            outputText = '';
        }
        outputText += child.outerHTML;
    }
    
    download(filename, head + outputText);
    outputText = '';

}

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/html;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

