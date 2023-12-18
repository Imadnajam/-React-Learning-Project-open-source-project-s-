
var num=0;
const colors = [
    "#FF0000", // Red
    "#00FF00", // Green
    "#0000FF", // Blue
    "#FFFF00", // Yellow
    "#FF00FF", // Magenta
    "#00FFFF", // Cyan
    "#FFA500", // Orange
    "#800080", // Purple
    "#008000", // Dark Green
    "#008080", // Teal
    "#800000", // Maroon
    "#000080", // Navy
    "#808000", // Olive
    "#808080", // Gray
    "#C0C0C0", // Silver
    "#FFFFFF", // White
    "#000000", // Black
    "#F0E68C", // Khaki
    "#A52A2A", // Brown
    "#7FFF00", // Chartreuse
    "#ADFF2F", // Green Yellow
    "#FFD700", // Gold
    "#D2691E", // Chocolate
    "#F5DEB3", // Wheat
    "#BDB76B", // Dark Khaki
    "#2E8B57", // Sea Green
    "#3CB371", // Medium Sea Green
    "#228B22", // Forest Green
    "#20B2AA", // Light Sea Green
    "#5F9EA0", // Cadet Blue
    "#4682B4", // Steel Blue
    "#6495ED", // Cornflower Blue
    "#87CEEB", // Sky Blue
    "#00CED1", // Dark Turquoise
    "#40E0D0", // Turquoise
    "#00FFFF", // Aqua
    "#1E90FF", // Dodger Blue
    "#4169E1", // Royal Blue
    "#0000CD", // Medium Blue
    "#00008B", // Dark Blue
    "#191970", // Midnight Blue
    "#8A2BE2", // Blue Violet
    "#9932CC", // Dark Orchid
  ];
  
  // You can access the colors using colors[index], where index is a number from 0 to 39.
  
function count(){
    num+=1
    document.querySelector("#NumC").textContent="Color    "+colors[num];
    document.querySelector("body").style.backgroundColor= colors[num] ;

}
function cart(){

  
    return(
        <div>
        <label htmlFor="" id="NumC"></label><br />
        <button onClick={count} > clic</button>
       </div>

    )
}
export default cart