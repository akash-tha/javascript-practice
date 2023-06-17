let ul = document.querySelector('.list')

let form = document.querySelector('form')

let btnAdd = document.querySelector('.Add')

let movies = [
    {
        name: 'Inception',
        watched: false
    }
]

// console.log(btnAdd)
// console.log(ul)

function addMovie(event){
    event.preventDefault();
    //console.dir(event.target.elements.movie)

    movies.push({
        name: event.target.elements.movie.value,
        watched: false
}); 
    createMovieUI();
}

function handleChange(event){
    console.log(event.target)
    const id = event.target.id;
    movies[id].watched = !movies[id].watched
    createMovieUI()
}

function createMovieUI(){
    ul.innerHTML = "";
    console.log(movies)
    movies.forEach((movie,i)=>{
        let li = document.createElement('li');
        li.id = Math.random()
        li.classList.add('blocks')
        let input = document.createElement('input');
        input.type = 'checkbox';
        input.id = i;
        input.addEventListener('change', handleChange)
        let label = document.createElement('label');
        label.for = i;
        label.innerText = movie.name;
        let span = document.createElement('span');
        span.innerText = 'x';
        span.setAttribute('data-id', i)
        span.addEventListener('click', deleteMovie )
        li.append(input,label, span)
        ul.append(li);
    })
}

function deleteMovie(event){
    console.log('delete movie');
    //event.target.parentElement.remove();
   const id = event.target.dataset.id;
   //delete 1 element at index id
   movies.splice(id, 1)
   createMovieUI();
}

createMovieUI();

form.addEventListener('submit', addMovie)