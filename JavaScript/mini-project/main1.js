let url = new URL(location.href);
let search = url.searchParams.get("id");
fetch('https://jsonplaceholder.typicode.com/users/' + search)
    .then(value => value.json())
    .then(value => {
        let div = document.createElement('div');
        div.classList.add('users-info')
        let div1 = document.createElement('div');
        div1.classList.add('block-users')
        let h2 = document.createElement('h2');
        h2.classList.add('users-id-name-username')
        h2.innerText = `${value.id} -- ${value.name} -- ${value.username}`
        let p = document.createElement('p');
        p.classList.add('contact-info')
        p.innerText = `Contact Info:
      ${value.email}
      Address:
      Street: ${value.address.street}
      Suite: ${value.address.suite}
      City: ${value.address.city}
      ZipCode: ${value.address.zipcode}
      GeoPosition: ${value.address.geo.lat} // ${value.address.geo.lng}
      Phone: ${value.phone}
      WebSite ${value.website}:
      Company Name: ${value.company.name}
                CatchPhrase: ${value.company.catchPhrase}
                Bs: ${value.company.bs}`
        let btn = document.createElement('button');
        btn.classList.add('post-of-current-user')
        btn.innerText = 'Post of current user'
        btn.onclick = function () {
            fetch('https://jsonplaceholder.typicode.com/users/' + value.id + '/posts')
                .then(value => value.json())
                .then(value => {
                    let div2 = document.createElement('div');
                    div2.classList.add('block-posts')
                    for (const post of value) {
                        let div = document.createElement('div')
                        div.classList.add('posts-users')
                        let a = document.createElement('a');
                        a.classList.add('post')
                        a.href = 'post-details.html?id=' + post.id
                        a.innerText = post.title
                        div2.appendChild(div)
                        div.appendChild(a)
                        document.body.appendChild(div2)
                    }
                })
        }
        div1.append(h2, p)
        div.append(div1, btn)
        document.body.appendChild(div)
    })


