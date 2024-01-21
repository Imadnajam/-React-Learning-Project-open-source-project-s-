

function background(b){
    document.body.style.backgroundColor=b;
}
function verif(){
    const date = new Date();
    const ve= date.getHours()
    return(
        <>
        { ve >13 ?background('grey') : background('white') }
        </>
    )
}
export default verif