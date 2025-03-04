console.log('JS file connected');

let theButtons = document.querySelectorAll('#buttonHolder img'),
    puzzleBoard = document.querySelector('.puzzle-board'),
    puzzlePieces = document.querySelectorAll('.puzzle-pieces img'),
    originalContainer = document.querySelector('.puzzle-pieces'),
    tlPiece = document.querySelector('.puzzle-pieces #tl'),
    trPiece = document.querySelector('.puzzle-pieces #tr'),
    blPiece = document.querySelector('.puzzle-pieces #bl'),
    brPiece = document.querySelector('.puzzle-pieces #br'),
    dropZones = document.querySelectorAll('.drop-zone'),
    originalZone,
    zoneTaken,
    draggedPiece;

    function changeBGimage() {
        puzzleBoard.style.backgroundImage = `url(images/backGround${this.id}.jpg)`;
        tlPiece.src = `images/topLeft${this.id}.jpg`;
        trPiece.src = `images/topRight${this.id}.jpg`;
        blPiece.src = `images/bottomLeft${this.id}.jpg`;
        brPiece.src = `images/bottomRight${this.id}.jpg`;

        puzzlePieces.forEach(piece => originalContainer.appendChild(piece));

        dropZones.forEach(zone => zone.zoneTaken = false);
    }

    function handlesStartDrag() {
        console.log('Started Dragging this piece: ', this);
        draggedPiece = this;

        originalZone = this.parentElement;
    }

    function handleDragOver(e) {
        e.preventDefault();
        console.log('Dragged Over');
    }

    function handleDrop(e) {
        
        e.preventDefault();

        if (this.zoneTaken === true) {
            console.log('Zone Taken');
        }

        else {
            this.appendChild(draggedPiece);
            console.log('dropped');
            this.zoneTaken = true;

            originalZone.zoneTaken = false;
        }
        
    }

    theButtons.forEach(button => button.addEventListener('click', changeBGimage));

    puzzlePieces.forEach(piece => piece.addEventListener('dragstart', handlesStartDrag));

    dropZones.forEach(zone => zone.addEventListener('dragover', handleDragOver));

    dropZones.forEach(zone => zone.addEventListener('drop', handleDrop));