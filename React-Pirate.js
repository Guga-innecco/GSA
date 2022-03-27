function MakeHtmlByID(Local, HTML_CODE) {
    document.querySelector("#" + HTML_CODE.toString())
}
function MakeHtmlByClass(Local, HTML_CODE) {
    document.querySelector("." + HTML_CODE.toString())
}
var react = [MakeHtmlByClass, MakeHtmlByID]
export default react