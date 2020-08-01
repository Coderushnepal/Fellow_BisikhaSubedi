// creating the containers
const mainContainer = document.createElement('div');

// creating a heading 
const heading = document.createElement('h1');
heading.innerHTML = 'My Blog';
heading.style.marginLeft = '600px';


// styling the containers
mainContainer.style.backgroundColor = '#87ceeb';
mainContainer.style.width = "100%";
mainContainer.style.position = 'relative';

searchDiv.style.width = '60%';
searchDiv.style.marginLeft = '260px';
searchDiv.style.height = '40px';

// Append the containers
document.body.appendChild(mainContainer);
mainContainer.appendChild(heading);
mainContainer.appendChild(searchDiv);

// Note - map method creates a new array

blogdetails.map(function(value , index) {
    // creating a div for every single blog post
    var blogContainer = document.createElement('div');
    blogContainer.id = "blogcontainerdiv";

    var blogId = document.createElement('h1');
    var blogTitle = document.createElement('div');
    var blogDescription = document.createElement('div');
    
    mainContainer.appendChild(blogContainer);
    blogContainer.appendChild(blogId);
    blogContainer.appendChild(blogTitle);
    blogContainer.appendChild(blogDescription);

    blogId.innerHTML = value.id;
    blogTitle.innerHTML = value.title;
    blogDescription.innerHTML = value.description;

    // styling blog container
    blogContainer.style.backgroundColor = '#D3D3D3';
    blogContainer.style.width = '60%';
    blogContainer.style.margin = "0 auto";
    // blogContainer.style.height = '50px';
    blogContainer.style.marginBottom = '20px';
});


