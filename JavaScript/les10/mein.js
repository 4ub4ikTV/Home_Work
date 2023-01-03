let url = new URL(location.href);
let search = url.searchParams.get("id");
fetch('https://jsonplaceholder.typicode.com/users/' + search)
    .then(value => value.json())
    .then(value => {
        let div = document.createElement('div');
        let h2 = document.createElement('h2');
        h2.innerText = `${value.id} -- ${value.name} -- ${value.username}`
        let p = document.createElement('p');
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
        div.append(h2, p)
        document.body.appendChild(div)
    })