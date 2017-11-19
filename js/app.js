var inputBox = document.getElementById('input');
inputBox.addEventListener('click',function(){
    inputBox.style.marginLeft ='0';
    var inputBoxParent = document.getElementById('input').parentNode;
    inputBoxParent.classList.add('input-box-message');
    var button = document.createElement('button');
    var buttonContent = document.createTextNode('Guardar');
    button.classList.add('button-input');
    button.appendChild(buttonContent);
    inputBoxParent.appendChild(button);

    var contentXDiv = document.createElement('a');
    var drawX = document.createTextNode('X');
    contentXDiv.classList.add('equis');
    contentXDiv.appendChild(drawX);
    inputBoxParent.appendChild(contentXDiv);

});

//var buttonInDocument = document.body.children[2].children[1];
button.addEventListener('click', function(){
    alert('holi');
});

/*
inputBox.addEventListener('keydown',function(){
    var newInputParent = document.getElementById('new-input').parentNode;
    //var newBox = document.createElement('div');
    var newTextarea = document.createElement('textarea');
    var newButton = document.createElement('button')
    var newContent = document.createTextNode('Guardar');
    var newContentX = document.createElement('div');
    var newX = document.createTextNode('X');

    if(inputBox.value === "Añadir lista" || inputBox.value === "añadir lista"){
        
        newInputParent.appendChild(newTextarea);
        newButton.appendChild(newContent);
        newInputParent.appendChild(newButton);
        newContentX.appendChild(newX);
        newInputParent.appendChild(newContentX);
    }
});
*/