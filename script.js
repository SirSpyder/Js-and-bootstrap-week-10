/* Using HTML, Bootstrap, and JavaScript create a single page website that contains the following:

A Bootstrap styled table representing your choice of data.
A Bootstrap styled form that allows a user to add a new row to the table when clicking on submit. */


//To fufill all the requirments for this I need a working table and form to add to the table.

//For the car theme it needs to store number, make, model, and year.

const formButton = document.getElementById('formSubmit')

let number = 0

formButton.addEventListener('click', (event) => {
    event.preventDefault()
    // Need to be able to hold values of the form time for variables!
    let Make = document.getElementById('Make').value
    let Model = document.getElementById('Model').value
    let Year = document.getElementById('Year').value


    let newTableRow = document.createElement('tr')

    let numberNode = document.createElement('td')
        numberNode.innerHTML = number
        newTableRow.append(numberNode)

    let MakeNode = document.createElement('td')
        MakeNode.innerHTML = Make
        newTableRow.append(MakeNode)

    let ModelNode = document.createElement('td')
        ModelNode.innerHTML = Model
        newTableRow.append(ModelNode)

    let YearNode = document.createElement('td')
        YearNode.innerHTML = Year
        newTableRow.append(YearNode)

    document.getElementById('tBody').appendChild(newTableRow)

    //These are to clear feilds so putting in the next one is easier
    document.getElementById('Make').value = ''
    document.getElementById('Model').value = ''
    document.getElementById('Year').value = ''

    number++
})
