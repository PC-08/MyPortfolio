let seasonSmallImage = document.getElementById('seasonSmallImage')
let seasonMediumImage = document.getElementById('seasonMediumImage')

let springSmall = 'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-xs-img.png'
let springMed = 'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-md-img.png'
let summerSmall = 'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-xs-img.png'
let summerMed = 'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-md-img.png'
let autumnSmall = 'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-xs-img.png'
let autumnMed = 'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-md-img.png'
let winterSmall = 'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-xs-img.png'
let winterMed = 'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-md-img.png'


function spring_img() {
    seasonSmallImage.src = springSmall
    seasonMediumImage.src = springMed
}

function summer_img() {
    seasonSmallImage.src = summerSmall
    seasonMediumImage.src = summerMed
}

function autumn_img() {
    seasonSmallImage.src = autumnSmall
    seasonMediumImage.src = autumnMed
}

function winter_img() {
    seasonSmallImage.src = winterSmall
    seasonMediumImage.src = winterMed
}