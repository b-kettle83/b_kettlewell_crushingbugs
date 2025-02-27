console.log('JS file connected');

let theButtons = document.querySelectorAll('#buttonHolder img'),
    puzzleBoard = document.querySelector('.puzzle-board'),
    puzzlePieces = document.querySelectorAll('.puzzle-pieces img'),
    tlPiece = document.querySelector('.puzzle-pieces #tl'),
    trPiece = document.querySelector('.puzzle-pieces #tr'),
    blPiece = document.querySelector('.puzzle-pieces #bl'),
    brPiece = document.querySelector('.puzzle-pieces #br'),
    dropZones = document.querySelectorAll('.drop-zone'),
    zoneTaken = false,
    draggedPiece;


    function changeBGimage() {
        puzzleBoard.style.backgroundImage = `url(images/backGround${this.id}.jpg)`;
        tlPiece.src = `images/topLeft${this.id}.jpg`;
        trPiece.src = `images/topRight${this.id}.jpg`;
        blPiece.src = `images/bottomLeft${this.id}.jpg`;
        brPiece.src = `images/bottomRight${this.id}.jpg`;
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