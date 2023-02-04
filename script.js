// const link = document.querySelector('a');
// link.textContent = 'Mozilla Developer Network';
// link.href = 'https://developer.mozilla.org';

// const sect = document.querySelector('section');
// const para = document.createElement('p');
// para.textContent = 'We hope you enjoyed the ride.';
// sect.appendChild(para);

// const text = document.createTextNode(' - the premier source for web development knowledge.');
// const linkPara = document.querySelector('p');
// linkPara.appendChild(text);

// sect.appendChild(linkPara);
// //sect.removeChild(linkPara);

// // para.style.color = 'white';
// // para.style.backgroundColor = 'black';
// // para.style.padding = '10px';
// // para.style.width = '250px';
// // para.style.textAlign = 'center';

// para.setAttribute('class', 'highlight');

// const firstDiv = document.querySelector('div');
// firstDiv.setAttribute('class', 'firstDiv');

// firstDiv.style.color = 'red';
// firstDiv.style.fontSize = '30px';
// firstDiv.style.backgroundColor = 'black';
// firstDiv.style.border = '1px solid red';
// firstDiv.style.borderRadius = '20px';

// const span = document.createElement('a');
// span.textContent = 'Go to google >>>';
// firstDiv.appendChild(span);
// span.href = 'http://google.com';
// span.style.color = 'white';

// const paragraphInSecondDiv = document.getElementById('anotherParagraph');
// paragraphInSecondDiv.textContent = 'Hello this is my second parahraph in this page';
// paragraphInSecondDiv.style.color = 'white';
// paragraphInSecondDiv.style.backgroundColor = 'black';
// paragraphInSecondDiv.style.width = '300px';
// paragraphInSecondDiv.style.height = '300px';
// paragraphInSecondDiv.style.fontSize = '30px';
// paragraphInSecondDiv.style.textTransform = 'uppercase';

// const secondSpan = document.createElement('span');
// secondSpan.textContent = ` This is my second span in this page.`;
// paragraphInSecondDiv.appendChild(secondSpan);
// secondSpan.style.color = 'red';


// function myFunction () {
//     btn.style.color = 'red';
//     btn.style.fontSize = '20px';
// }

// const btnTwo = document.getElementById('btn-two');
// btnTwo.textContent = 'push';

// function mouseOverFunc () {
//     btnTwo.style.color = 'red';
// }

// function mouseUpFunc () {
//     btnTwo.style.color = 'black';
// }

// const lastDiv = document.getElementById('lastDiv');
// lastDiv.textContent = 'this is my last div.';

// const spanInsideLastDiv = document.createElement('span');
// spanInsideLastDiv.setAttribute('class', 'spanLastDiv');
// spanInsideLastDiv.setAttribute('name', 'spanLastDivName');
// spanInsideLastDiv.textContent = 'this is my last span.';
// lastDiv.appendChild(spanInsideLastDiv);

//     lastDiv.style.fontSize = '30px';
//     spanInsideLastDiv.style.fontSize = '40px';
//     spanInsideLastDiv.style.display = 'block';

//     spanInsideLastDiv.addEventListener('mouseover', function () {
//         this.style.backgroundColor = 'red';
//         this.style.color = 'black';
//     })

//     spanInsideLastDiv.addEventListener('mouseout', function () {
//         this.style.backgroundColor = 'blue';
//         this.style.color = 'white';
//     })

//     const bigHeader = document.createElement('span');
//     bigHeader.setAttribute('name', 'bigHeader');
//     bigHeader.textContent = 'this is big header';
//     lastDiv.appendChild(bigHeader);

//     bigHeader.addEventListener('mouseover', function () {
//         this.style.fontSize = '50px';
//         this.style.color = 'white';
//         this.style.backgroundColor = 'green';
//     });

//     bigHeader.addEventListener('mouseout', function () {
//         this.style.fontSize = '30px';
//         this.style.color = 'black';
//         this.style.backgroundColor = 'red';
//     });

//     const divCamel = document.getElementById('divCamel');
//     const paragraph = document.createElement('p');
//     paragraph.setAttribute('id', 'divParagraph');
//     paragraph.textContent = 'this is a paragraph';
//     divCamel.appendChild(paragraph);

//         paragraph.style.color = 'black';

//     paragraph.addEventListener('mouseover', function () {
//         this.style.color = 'red';
//     });

//     paragraph.addEventListener('mouseout', function () {
//         this.style.color = 'black';
//     });


//     const nameOfAside = document.getElementById('nameOfAside');
//     const nameOfSpan = document.createElement('span');
//     nameOfSpan.setAttribute('class', 'nameOfSpan');
//     nameOfSpan.textContent = 'this is span inside aside';
//     nameOfAside.appendChild(nameOfSpan);

//     nameOfSpan.style.fontSize = '20px';
//     nameOfSpan.style.backgroundColor = 'black';
//     nameOfSpan.style.color = 'white';

//     nameOfSpan.addEventListener('mouseover', function (spanFunction) {
//         this.style.fontSize = '40px';
//         this.style.backgroundColor = 'black';
//         this.style.color = 'white';
//         this.textContent = 'hello';    
//         if (nameOfSpan.style.backgroundColor === 'black') {
//             nameOfSpan.style.backgroundColor = 'red';
//             nameOfSpan.style.fontSize = '50px';
//         }   
//     });

//     nameOfSpan.addEventListener('mouseout', function () {
//         this.textContent = 'this is span inside aside';
//         this.style.fontSize = '20px';
//     });
 

//     const sectionElement = document.querySelector('section');
//     const btnCounter = document.getElementById('sec-but');
//     btnCounter.textContent = 'counter';
//     sectionElement.appendChild(btnCounter);

//     const imageSelect = document.querySelector('img');
//         imageSelect.addEventListener('mouseover', function () {
//             this.style.width = '800px';
//             this.style.height = '800px';
//             this.style.transition = '1s';
//         });

//         imageSelect.addEventListener('mouseout', function () {
//             this.style.width = '400px';
//             this.style.height = '400px';
//         })


//         const newElement = document.querySelector('.sectionTwo');
//         const newParagraph = document.createElement('p');
//         newParagraph.setAttribute('class', 'newParagraph');
//         newParagraph.textContent = `email: vborisovit98@gmail.com`;
//         newElement.appendChild(newParagraph);


// const newButton = document.createElement('button');
// newButton.setAttribute('class', 'newButton');
// newButton.textContent = 'hide email';
// newElement.appendChild(newButton);
        


//         newButton.addEventListener('click', function () {
//            newParagraph.classList.toggle('hide');
//            if (newParagraph.className == 'newParagraph hide') {
//             newButton.textContent = 'show email';
//            } else {
//             newButton.textContent = 'hide email';
//            }
//         })
        
// const phoneNumber = document.querySelector('.phoneNumber');
// const showHideNumber = document.querySelector('.showHideNumber');

// const phoneNumberIs = '+359 89 610 7640'
//         phoneNumber.textContent = `The phone number is: ${phoneNumberIs}`;

//         showHideNumber.addEventListener('click', function () {
//             phoneNumber.classList.toggle('hide');
//             if (phoneNumber.className == 'phoneNumber hide') {
//                 showHideNumber.textContent = 'show phone';
//             } else if (phoneNumber.className == 'phoneNumber') {
//                 showHideNumber.textContent = 'hide phone';
//             }
//         });


// const anotherDiv = document.querySelector('.anotherDiv');
// const anotherParagraph = document.querySelector('.anotherParagraph');
// const myPhoneNumber = '+359 89 610 7640'
// anotherParagraph.textContent = `The phone number is: ${myPhoneNumber}`;
// const anotherButton = document.querySelector('.anotherButton');
// anotherButton.textContent = 'show';

// anotherButton.addEventListener('click', function () {
//     anotherParagraph.classList.toggle('hide');
//     if (anotherParagraph.className == 'anotherParagraph hide') {
//         anotherParagraph.style.display = 'block';
//         anotherButton.textContent = 'hide';
//     } else {
//         anotherParagraph.style.display = 'none';
//         anotherButton.textContent = 'show';
//     }
// })




const afterDiv = document.querySelector('.afterDiv');
const afterParagraph = document.querySelector('.afterParagraph');
const afterButton = document.querySelector('.afterButton');

const firstName = 'Viktor';
const lastName = 'Borisov'; 
afterParagraph.textContent = `The name is: ${firstName} ${lastName}`;
afterButton.textContent = 'show';

afterButton.addEventListener('click', function () {
    afterParagraph.classList.toggle('hide');
    if (afterParagraph.className == 'afterParagraph hide') {
        afterParagraph.style.display = 'block';
        afterButton.textContent = 'hide';
    } else {
        afterParagraph.style.display = 'none';
        afterButton.textContent = 'show';
    }
});


const lastDiv = document.querySelector('.lastDiv');
const lastParagraph = document.querySelector('.lastParagraph');
const lastButton = document.querySelector('.lastButton');

const streetAddress = 'Last Avanue';
const numberOfAddress = 'the number of the street is 231';
lastParagraph.textContent = `The full address is: ${streetAddress} ${numberOfAddress}`;
lastButton.textContent = 'Show the full address';

lastButton.addEventListener('click', function () {
    lastParagraph.classList.toggle('hiding');
    if (lastParagraph.className == 'lastParagraph hiding') {
        lastParagraph.style.display = 'block';
        lastButton.textContent = 'Hide the full address';
    } else {
        lastParagraph.style.display = 'none';
        lastButton.textContent = 'Show the full address'
    }
});