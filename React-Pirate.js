function MakeHtmlByID(Local, HTML_CODE) {
    var Doc = document.querySelector("#" + Local.toString())
    
}
function MakeHtmlByClass(Local, HTML_CODE) {
    var Doc = document.querySelector("." + Local.toString())
    Doc.innerHTML = HTML_code
}
var react = [MakeHtmlByClass, MakeHtmlByID]
export default react
