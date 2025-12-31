export function createFactory(type, data) {
  if (!factory[type]) {
    console.error("Factory type not found:", type)
    return ""
  }
  return factory[type](data)
}

const factory = {
  movie(movie) {
    const movieData = encodeURIComponent(JSON.stringify(movie))
    return `
      <div onclick="getTicket(this)" data-movie='${movieData}' class="showitem">
        <div class="item">
          <img src="${movie.image}" alt="${movie.title}">
          <p>${movie.releaseDate}</p>
          <p>${movie.title}</p>
        </div>
        <div class="frame"></div>
      </div>
    `
  },

  systemTherter(item) {
    return `
      <div class="item">  
        ${item.text}
        <div class="inside">
          <img src="${item.image}" alt="">
        </div>
      </div>
    `
  },

  promotion(item) {
    return `
      <div class="item">
        <img src="${item.image}" alt="">
        <h2>${item.detail}</h2>
        ${item.subdetail ? `<h4>${item.subdetail}</h4>` : ""}
      </div>
    `
  },

  news(item) {
    return `
      <div class="item">
        <img src="${item.image}" alt="">
        <h3>${item.head}</h3>
        <h3>${item.detail}</h3>
        <h4>${item.date}</h4>
      </div>
    `
  },

  date(item) {
    return `
      <div onclick="changeDate('${item.page}')" 
           class="item" 
           data-date-id="${item.page}">
        <h3>${item.day}</h3>
        <h4>${item.date}</h4>
      </div>
    `
  },
}
