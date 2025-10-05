/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// hide all section
document.getElementById("portfolio").style.display="none"
document.getElementById("about").style.display="none"
document.getElementById("contact").style.display="none"

function showslid1(){
    document.getElementById("portfolio").style.display="block"
    document.getElementById("about").style.display="none"
    document.getElementById("contact").style.display="none"
}

function showslid2(){
    document.getElementById("about").style.display="block"
    document.getElementById("portfolio").style.display="none"
    document.getElementById("contact").style.display="none"
}

function showslid3(){
    document.getElementById("contact").style.display="block"
    document.getElementById("portfolio").style.display="none"
    document.getElementById("about").style.display="none"
}


// get complete data
function getcomplained() {

    document.getElementById("get_btn").style.display = "none";

    fetch('https://sheetdb.io/api/v1/2435urwpirl4l/search?status=complained')
    .then(response => response.json())
    .then(data => {
        // print the data in table
        let staffs = data
        var table = "<table class= table table-sm>";
       
        // now add another row to show subject
        table += `<tr>
                    <th>light no</th>
                    <th>address</th>
                    <th>pin_code</th>
                    <th>status</th>
                    <th>msg</th>
               </tr>`;
        // now loop through staffs
        // show their name and marks
        for(let i = 0; i < staffs.length; i++) {
            table += "<tr>";
            table += `<td>${staffs[i].light_no}</td>`;
            table += `<td>${staffs[i].address}</td>`;
            table += `<td>${staffs[i].pin_code}</td>`;
            table += `<td>${staffs[i].status}</td>`;
            table += `<td>${staffs[i].msg}</td>`;
            table += "</tr>";
        }
        table += "</table>";
        // append table to body
        document.getElementById("staffList").innerHTML += table;
    })
}
// get all data
function getall() {

    document.getElementById("getdatabtn").style.display = "none";

    fetch('https://sheetdb.io/api/v1/2435urwpirl4l')
    .then(response => response.json())
    .then(data => {
        // print the data in table
        let tabdata = data
        var table = "<table class= table table-sm>";

        // now add another row to show subject
        table += `<tr>
                    <th>light no</th>
                    <th>address</th>
                    <th>pin_code</th>
                    <th>status</th>
                    <th>msg</th>
               </tr>`;
        // now loop through tabdata
        // show their name and marks
        for(let i = 0; i < tabdata.length; i++) {
            table += "<tr>";
            table += `<td>${tabdata[i].light_no}</td>`;
            table += `<td>${tabdata[i].address}</td>`;
            table += `<td>${tabdata[i].pin_code}</td>`;
            table += `<td>${tabdata[i].status}</td>`;
            table += `<td>${tabdata[i].msg}</td>`;
            table += "</tr>";
        }
        table += "</table>";
        // append table to body
        document.getElementById("tabdata").innerHTML += table;
    })
}