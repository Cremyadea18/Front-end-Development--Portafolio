function opencharacter(characterName) {
    var i, tabcontent; 
    tabcontent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }
     
    document.getElementById(characterName).style.display = 'block';
}
document.getElementById("defaultopen").click();