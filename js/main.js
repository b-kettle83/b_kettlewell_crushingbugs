console.log('JS file connected');

let theButtons = document.querySelectorAll('#buttonHolder img'),
    puzzleBoard = document.querySelector('.puzzle-board'),
    puzzlePieces = document.querySelectorAll('.puzzle-pieces img'),
    dropZones = document.querySelectorAll('.drop-zone'),
    draggedPiece,

    // Store the original left container of the puzzle pieces
    originalContainer = document.querySelector('.puzzle-pieces'),

    // Variables for each of the locations of puzzle pieces
    tlPiece = document.querySelector('.puzzle-pieces #tl'),
    trPiece = document.querySelector('.puzzle-pieces #tr'),
    blPiece = document.querySelector('.puzzle-pieces #bl'),
    brPiece = document.querySelector('.puzzle-pieces #br'),

    // Variable to store the original zone of a picked up piece
    originalZone,

    // Boolean for if a zone is taken or not
    zoneTaken;

    // On background change
    function changeBGimage() {
        // Change puzzle board background
        puzzleBoard.style.backgroundImage = `url(images/backGround${this.id}.jpg)`;

        // Change each piece's image to whichever one corresponds with the id of the button pressed
        tlPiece.src = `images/topLeft${this.id}.jpg`;
        trPiece.src = `images/topRight${this.id}.jpg`;
        blPiece.src = `images/bottomLeft${this.id}.jpg`;
        brPiece.src = `images/bottomRight${this.id}.jpg`;

        // Place each puzzle piece in its original container (the left box)
        puzzlePieces.forEach(piece => originalContainer.appendChild(piece));

        // Make every drop zone no longer taken, making them available for placement
        dropZones.forEach(zone => zone.zoneTaken = false);
    }

    // When a piece is picked up
    function handlesStartDrag() {
        console.log('Started Dragging this piece: ', this);

        // Set the picked up piece to be the currently dragged piece
        draggedPiece = this;

        // Store the zone the piece was originally in
        originalZone = this.parentElement;
    }

    // While a piece is held over a drop zone, prevent default
    function handleDragOver(e) {
        e.preventDefault();
        console.log('Dragged Over');
    }

    // When a piece is dropped
    function handleDrop(e) {
        
        e.preventDefault();

        // If the zone the piece is dropped in is taken, don't drop
        if (this.zoneTaken === true) {
            console.log('Zone Taken');
        }

        //If the zone is not taken, drop the piece and set the zone to taken
        else {
            this.appendChild(draggedPiece);
            console.log('dropped');
            this.zoneTaken = true;

            // Once the piece is dropped, make the take status of its original container false so it can be used again
            originalZone.zoneTaken = false;
        }
        
    }

    // Run each function on user interaction
    theButtons.forEach(button => button.addEventListener('click', changeBGimage));

    puzzlePieces.forEach(piece => piece.addEventListener('dragstart', handlesStartDrag));

    dropZones.forEach(zone => zone.addEventListener('dragover', handleDragOver));

    dropZones.forEach(zone => zone.addEventListener('drop', handleDrop));