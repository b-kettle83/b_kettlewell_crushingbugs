console.log('JS file connected');

let theButtons = document.querySelectorAll('#buttonHolder img'),
    puzzleBoard = document.querySelector('.puzzle-board'),
    puzzlePieces = document.querySelectorAll('.puzzle-pieces img'),
    dropZones = document.querySelectorAll('.drop-zone'),
    draggedPiece;


    function changeBGimage() {
        puzzleBoard.style.backgroundImage = `url(images/backGround${this.id}.jpg)`;
        //Look for bug fix here
    }

    function handlesStartDrag() {
        console.log('Started Dragging this piece: ', this);
        draggedPiece = this;
    }

    function handleDragOver(e) {
        e.preventDefault();
        console.log('Dragged Over');
    }

    function handleDrop(e) {
        console.log('dropped');
        e.preventDefault();
        //Look for bug fix here

        this.appendChild(draggedPiece);
    }

    theButtons.forEach(button => button.addEventListener('click', changeBGimage));

    puzzlePieces.forEach(piece => piece.addEventListener('dragstart', handlesStartDrag));

    dropZones.forEach(zone => zone.addEventListener('dragover', handleDragOver));

    dropZones.forEach(zone => zone.addEventListener('drop', handleDrop));