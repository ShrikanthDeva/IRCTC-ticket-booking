const getValue = () => {
    const passengers = document.getElementById('passengers')
    return passengers.value
}


const renderPassengerCards = () => {

    const val = getValue()
    const fare = localStorage.getItem('fare')

    removeExistingFields()

    for (let i = 0; i < val; i++) {
        createPassengerCard(i+1)
    }

    updateFare(fare*val)

}

const removeExistingFields = () => {
    for (let i=0; i<6; i++) {
        const elem = document.querySelector('.passenger_details')
        if (elem) {
            elem.remove()
        }
    }
}

const createPassengerCard = (num) => {

    // Root node
    const div = document.createElement('div')
    div.classList.add('passenger_details')

    // Title
    const title = document.createElement('h3')
    title.textContent = `Passenger ${num}`
    title.classList.add('title')
    div.appendChild(title)

    // Name Field
    const name = document.createElement('div')
    name.classList.add('flex-row')

    var label = document.createElement('label')
    label.setAttribute('for', 'name')
    label.textContent = "Name"
    label.classList.add('name')


    var input = document.createElement('input')
    input.setAttribute('type', 'text')
    input.setAttribute('name', 'name')
    input.setAttribute('id', `name${num}`)
    input.setAttribute('placeholder', 'Enter name')

    name.appendChild(label)
    name.appendChild(input)
    div.appendChild(name)

    // Age Field
    const age = document.createElement('div')
    age.classList.add('flex-row')

    label = document.createElement('label')
    label.setAttribute('for', 'age')
    label.textContent = "Age"
    label.classList.add('age')

    input = document.createElement('input')
    input.setAttribute('type', 'text')
    input.setAttribute('name', 'age')
    input.setAttribute('id', `age${num}`)
    input.setAttribute('placeholder', 'Enter age')

    age.appendChild(label)
    age.appendChild(input)
    div.appendChild(age)

    // Gender
    const gender = document.createElement('div')
    gender.classList.add('flex-row')
    
    label = document.createElement('label')
    label.setAttribute('for', 'gender')
    label.textContent = "Gender"
    label.classList.add('gender')

    const select = document.createElement('select')
    select.name = "gender"
    select.id = `gender${num}`

    const option1 = document.createElement('option')
    option1.value = "Male"
    option1.textContent = "Male"

    const option2 = document.createElement('option')
    option2.value = "Female"
    option2.textContent = "Female"

    select.appendChild(option1)
    select.appendChild(option2)

    gender.appendChild(label)
    gender.appendChild(select)
    div.append(gender)


    // Mobile
    const mobile = document.createElement('div')
    mobile.classList.add('flex-row')

    label = document.createElement('label')
    label.setAttribute('for', 'mobile')
    label.textContent = "Mobile"
    label.classList.add('mobile')

    input = document.createElement('input')
    input.setAttribute('type', 'text')
    input.setAttribute('name', 'mobile')
    input.setAttribute('id', `mobile${num}`)
    input.setAttribute('placeholder', 'Enter mobile number')

    mobile.appendChild(label)
    mobile.appendChild(input)
    div.appendChild(mobile)

    // Appending Root Node to Parent
    const parent = document.getElementById('passenger_details')
    const child = document.querySelector('.fare')
    parent.insertBefore(div, child)
}

const intializeTotalFare = () => {
    const fare = localStorage.getItem('fare');
    // To be sent by backend

    const div = document.createElement('div')
    div.textContent = "Total Fare: "
    div.classList.add('fare')

    const rupee = document.createElement('span')
    rupee.classList.add('rupee')
    rupee.textContent = '₹'
    div.appendChild(rupee)

    const parent = document.getElementById('passenger_details')
    const child = document.getElementById('submit-btn')
    parent.insertBefore(div, child)

    updateFare(fare)
}

const updateFare = (value) => {
    const parent = document.querySelector('.fare')
    const prevFare = parent.lastChild
    if (prevFare.id == "amount") {
        prevFare.remove()
    }

    const fare = document.createElement('span')
    fare.id = "amount"
    fare.textContent = `${value}`
    parent.appendChild(fare) 
}


localStorage.setItem('fare', '220')
intializeTotalFare()

document.getElementById('passengers').addEventListener('click', renderPassengerCards)